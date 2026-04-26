import prisma from "../../lib/prisma";

export async function POST(request) {
  try {
    const body = await request.json();
    const { userId, name, service, date } = body;

    if (!userId) {
      return Response.json({ error: "You must be logged in." }, { status: 401 });
    }

    const newBooking = await prisma.booking.create({
      data: { userId: parseInt(userId), name, service, date }
    });
    return Response.json({ message: "Booked!", newBooking }, { status: 201 });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}