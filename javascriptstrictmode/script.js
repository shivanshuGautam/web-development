// strict mode
"use strict";

function demo() {
    let name = "Shivanshu";
    console.log(name); // ✅ Works fine

    undeclaredVar = 50; // ❌ Error (strict mode में declare करना ज़रूरी है)
}
demo();