export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method Not Allowed' });

  const { name, vehicle, service } = req.body;

  // This is where you would connect to a database
  console.log(`New Booking: ${name} with a ${vehicle} for ${service}`);

  return res.status(200).json({ success: true, message: "Booking confirmed!" });
}