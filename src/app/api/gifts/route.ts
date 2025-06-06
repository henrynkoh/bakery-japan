import { NextRequest, NextResponse } from 'next/server';
import { EGift } from '@/lib/types';

// Simulated database
let gifts: EGift[] = [];
let giftCounter = 1;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const newGift: EGift = {
      id: `gift-${giftCounter++}`,
      code: generateGiftCode(),
      amount: body.amount,
      message: body.message || '',
      senderEmail: body.senderEmail,
      recipientEmail: body.recipientEmail,
      expiryDate: new Date(Date.now() + (365 * 24 * 60 * 60 * 1000)), // 1 year
      isUsed: false,
      createdAt: new Date()
    };

    gifts.push(newGift);

    // Send email/LINE notification (simulated)
    await sendGiftNotification(newGift);

    return NextResponse.json({ 
      gift: newGift,
      message: 'E-Gift sent successfully!'
    });

  } catch (error) {
    console.error('Gift creation error:', error);
    return NextResponse.json({ error: 'Failed to create gift' }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');

  if (code) {
    const gift = gifts.find(g => g.code === code);
    if (!gift) {
      return NextResponse.json({ error: 'Gift not found' }, { status: 404 });
    }
    
    if (gift.isUsed) {
      return NextResponse.json({ error: 'Gift already used' }, { status: 410 });
    }
    
    if (new Date() > gift.expiryDate) {
      return NextResponse.json({ error: 'Gift expired' }, { status: 410 });
    }

    return NextResponse.json({ gift });
  }

  return NextResponse.json({ gifts });
}

function generateGiftCode(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < 8; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

async function sendGiftNotification(gift: EGift) {
  // Integration point for email/LINE notifications
  console.log('Sending gift notification:', {
    to: gift.recipientEmail,
    code: gift.code,
    amount: gift.amount,
    message: gift.message
  });
  
  // In a real implementation, this would integrate with:
  // - Email service (SendGrid, AWS SES, etc.)
  // - LINE Messaging API
  // - n8n workflow for notification handling
} 