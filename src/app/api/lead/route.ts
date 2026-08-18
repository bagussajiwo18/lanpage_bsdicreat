import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { full_name, email, phone_whatsapp, service_type, budget_range, project_details, estimated_cost } = body;

    // Validate required fields
    if (!full_name || !email || !phone_whatsapp || !service_type) {
      return NextResponse.json(
        { error: 'Mohon lengkapi nama, email, nomor WhatsApp, dan pilihan layanan.' },
        { status: 400 }
      );
    }

    // Build encoded WhatsApp message for direct client redirection
    const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '6281234567890';
    const waText =
      `Halo BS DICREAT! 👋\n` +
      `Saya ingin berkonsultasi mengenai proyek desain.\n\n` +
      `*Detail Konsultasi:*\n` +
      `• *Nama:* ${full_name}\n` +
      `• *Email:* ${email}\n` +
      `• *WhatsApp:* ${phone_whatsapp}\n` +
      `• *Layanan:* ${service_type}\n` +
      `• *Estimasi Anggaran:* ${budget_range}\n` +
      (estimated_cost ? `• *Estimasi Biaya Calculator:* ${estimated_cost}\n` : '') +
      (project_details ? `\n*Deskripsi Proyek:*\n"${project_details}"` : '');

    const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(waText)}`;

    return NextResponse.json({
      success: true,
      message: 'Konsultasi berhasil dikirim!',
      waLink,
    });
  } catch (error) {
    console.error('API Lead Submission Error:', error);
    return NextResponse.json(
      { error: 'Terjadi kesalahan sistem. Silakan coba lagi.' },
      { status: 500 }
    );
  }
}
