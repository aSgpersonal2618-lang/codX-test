// hi
function findDuplicateEmails(newSignups, existingUsers) {
  const existingSet = new Set(existingUsers.map(user => user.email));
  const duplicates = [];
  for (const signup of newSignups) {
    if (existingSet.has(signup.email)) {
      duplicates.push(signup.email);
    }
  }
  return duplicates;
}
}
