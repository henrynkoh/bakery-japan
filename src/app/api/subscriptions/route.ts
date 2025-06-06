import { NextRequest, NextResponse } from 'next/server';
import { BreadSubscription } from '@/lib/types';

// Simulated database
let subscriptions: BreadSubscription[] = [];
let subCounter = 1;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const nextDelivery = calculateNextDelivery(body.plan);
    
    const newSubscription: BreadSubscription = {
      id: `sub-${subCounter++}`,
      customerId: body.customerId,
      plan: body.plan,
      items: body.items,
      nextDelivery,
      status: 'active',
      preferences: {
        substituteOutOfStock: body.preferences?.substituteOutOfStock ?? true,
        specialRequests: body.preferences?.specialRequests ?? []
      }
    };

    subscriptions.push(newSubscription);

    // Schedule n8n workflow for subscription management
    await scheduleSubscriptionWorkflow(newSubscription);

    return NextResponse.json({ 
      subscription: newSubscription,
      message: `${body.plan} subscription created successfully!`
    });

  } catch (error) {
    console.error('Subscription creation error:', error);
    return NextResponse.json({ error: 'Failed to create subscription' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ subscriptions });
}

export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, status, preferences } = body;

    const subscription = subscriptions.find(s => s.id === id);
    if (!subscription) {
      return NextResponse.json({ error: 'Subscription not found' }, { status: 404 });
    }

    if (status) subscription.status = status;
    if (preferences) subscription.preferences = { ...subscription.preferences, ...preferences };

    return NextResponse.json({ 
      subscription,
      message: 'Subscription updated successfully'
    });

  } catch (error) {
    console.error('Subscription update error:', error);
    return NextResponse.json({ error: 'Failed to update subscription' }, { status: 500 });
  }
}

function calculateNextDelivery(plan: 'weekly' | 'biweekly' | 'monthly'): Date {
  const now = new Date();
  const daysToAdd = plan === 'weekly' ? 7 : plan === 'biweekly' ? 14 : 30;
  return new Date(now.getTime() + (daysToAdd * 24 * 60 * 60 * 1000));
}

async function scheduleSubscriptionWorkflow(subscription: BreadSubscription) {
  // Integration point for n8n subscription workflows
  console.log('Scheduling subscription workflow:', subscription.id);
  
  // This would trigger n8n workflows for:
  // - Automatic recurring orders
  // - Inventory management
  // - Customer notifications
  // - Payment processing
} 