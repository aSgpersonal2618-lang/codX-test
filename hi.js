// hi
function findDuplicateEmails(newSignups, existingUsers) {
  const duplicates = [];
  for (let i = 0; i < newSignups.length; i++) {
    for (let j = 0; j < existingUsers.length; j++) {
      if (newSignups[i].email === existingUsers[j].email) {
        duplicates.push(newSignups[i].email);
      }
    }
  }
  return duplicates;
}
