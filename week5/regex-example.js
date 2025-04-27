const emails = [
    "student@example.com",
    "user.name+tag@sub.domain.co",
    "invalid-email@"
  ];
  
  const pattern = /^[a-zA-Z0-9.%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  emails.forEach(email => {
    console.log(email, pattern.test(email));
  });
  