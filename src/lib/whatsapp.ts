const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '6281234567890';

/**
 * Build a WhatsApp chat link with an optional pre-filled message.
 */
export function getWhatsAppLink(message?: string): string {
  const base = `https://wa.me/628984985121`;
  if (message) {
    return `${base}?text=${encodeURIComponent(message)}`;
  }
  return base;
}

/**
 * Build a WhatsApp link with a service-specific greeting.
 */
export function getWhatsAppServiceLink(service: string): string {
  const msg = `Halo BS DICREAT \nSaya tertarik dengan layanan *${service}* dan ingin berdiskusi lebih lanjut. Terima kasih!`;
  return getWhatsAppLink(msg);
}
