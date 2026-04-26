try {
    const { action, email, password } = await request.json();

    if (action === "signup") {
      const newUser = await prisma.user.create({ data: { email, password } });
      return Response.json({ message: "Account created!", userId: newUser.id }, { status: 201 });
    }

    if (action === "login") {
      const user = await prisma.user.findUnique({ where: { email } });
      if (!user || user.password !== password) {
        return Response.json({ error: "Invalid credentials" }, { status: 401 });
      }
      return Response.json({ message: "Logged in!", userId: user.id }, { status: 200 });
    }
  } catch (error) {
    return Response.json({ error: "Email already exists or database error." }, { status: 500 });
  }
