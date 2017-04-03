/* Clean Code: Formating and Comments */
/* FORMATTING */
// Use consistent capitalization
Unify
- camelCase
- not separate by _ OR always separate by _




// Function caller and callees should be close

/* COMMENTS */
// Only comment things that have business logic complexity
function hashIt(data) {
  // The hash
  let hash = 0;
  
  // length of string
  const length = data.length;
  
  // loop through every character in data
  for (let i = 0; i < length; i++) {
    // Get character code.
    const char = data.charCodeAt(i);
    // Make the hash
    hash = ((hash << 5) - hash) + char;
    // Convert to 32 - bit integer
    hash &= hash;
  }
}
