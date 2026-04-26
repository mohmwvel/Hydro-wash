async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Grab the logged-in user's ID
    const userId = localStorage.getItem("userId");
    
    if (!userId) {
      setMsg("Error: You must be logged in to book a wash.");
      return;
    }

    // Add the userId to the data being sent
    data.userId = userId;

    const res = await fetch("/api/booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setMsg("Booking Successful!");
      e.target.reset();
    } else {
      setMsg("Error booking wash.");
    }
  }