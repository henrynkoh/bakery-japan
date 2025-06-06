import { NextRequest, NextResponse } from 'next/server';
import { NetOrder, QuickOrder, WorkflowTrigger } from '@/lib/types';

// Simulated database
let orders: (NetOrder | QuickOrder)[] = [];
let orderCounter = 1;

export async function GET() {
  return NextResponse.json({ orders });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, ...orderData } = body;

    let newOrder: NetOrder | QuickOrder;

    if (type === 'net-order') {
      // Mister Donut Net Order System
      newOrder = {
        id: `net-${orderCounter++}`,
        items: orderData.items,
        pickupTime: new Date(orderData.pickupTime),
        storeId: orderData.storeId,
        customerInfo: orderData.customerInfo,
        status: 'pending',
        totalAmount: orderData.items.reduce((sum: number, item: any) => sum + item.totalPrice, 0),
        paymentMethod: orderData.paymentMethod || 'card'
      } as NetOrder;

      // Simulate guest checkout capability
      if (!orderData.customerInfo.id) {
        newOrder.customerInfo.id = `guest-${Date.now()}`;
      }

    } else if (type === 'quick-order') {
      // Krispy Kreme Quick Order System
      const estimatedTime = calculateEstimatedTime(orderData.items);
      
      newOrder = {
        id: `quick-${orderCounter++}`,
        items: orderData.items,
        orderType: orderData.orderType,
        scheduledTime: new Date(orderData.scheduledTime),
        customerId: orderData.customerId,
        status: 'confirmed',
        estimatedTime
      } as QuickOrder;

      // Auto-cancellation logic for impossible orders
      if (estimatedTime > 60) { // More than 1 hour
        return NextResponse.json(
          { 
            error: 'Order cancelled automatically - preparation time exceeds capacity',
            estimatedTime,
            message: 'We cannot fulfill this order within reasonable time. Please reduce quantity or try again later.'
          },
          { status: 409 }
        );
      }
    } else {
      return NextResponse.json({ error: 'Invalid order type' }, { status: 400 });
    }

    orders.push(newOrder);

    // Trigger n8n workflow
    await triggerWorkflow({
      type: 'order-placed',
      payload: newOrder,
      timestamp: new Date()
    });

    return NextResponse.json({ 
      order: newOrder,
      message: type === 'net-order' ? 
        `Order confirmed for pickup at ${new Date(orderData.pickupTime).toLocaleTimeString()}` :
        `Order confirmed, ready in ${(newOrder as QuickOrder).estimatedTime} minutes`
    });

  } catch (error) {
    console.error('Order creation error:', error);
    return NextResponse.json({ error: 'Failed to create order' }, { status: 500 });
  }
}

function calculateEstimatedTime(items: any[]): number {
  // Simulate preparation time calculation
  const baseTime = 10; // 10 minutes base
  const itemTime = items.reduce((total, item) => {
    const complexity = item.isCustomizable ? 5 : 2;
    return total + (item.quantity * complexity);
  }, 0);
  
  return Math.min(baseTime + itemTime, 90); // Cap at 90 minutes
}

async function triggerWorkflow(trigger: WorkflowTrigger) {
  // Integration point for n8n workflows
  // In a real implementation, this would send a webhook to n8n
  console.log('Triggering n8n workflow:', trigger);
  
  // Simulated webhook call
  try {
    // await fetch('http://localhost:5678/webhook/order-placed', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(trigger)
    // });
  } catch (error) {
    console.error('Workflow trigger failed:', error);
  }
} 