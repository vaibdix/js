// 1. Create a Simple Promise
const simplePromise = new Promise((resolve) => {
    resolve("Data loaded successfully");
});
simplePromise.then(result => console.log(result));

// 2. Basic Promise Rejection
const rejectionPromise = new Promise((_, reject) => {
    reject("Error: Failed to load data");
});
rejectionPromise.catch(error => console.log(error));

// 3. Promise with .then() for Math Operations
const mathPromise = new Promise((resolve) => {
    resolve(10);
});
mathPromise.then(num => console.log(num * 2)); // Should log 20

// 4. Chain Multiple .then() Calls
const chainPromise = new Promise((resolve) => {
    resolve(5);
});
chainPromise
    .then(num => num + 3)
    .then(result => console.log(result * 2)); // Should log 16

// 5. Fetch Data from an API
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => console.log(data.title)); // Should log the post title

// 6. Handle Fetch Errors
fetch('https://jsonplaceholder.typicode.com/nonexistent')
    .catch(() => console.log("Error: Could not retrieve data."));

// 7. Conditional Promise Resolution
const randomPromise = new Promise((resolve, reject) => {
    const randomNum = Math.random();
    if (randomNum > 0.5) {
        resolve("Success!");
    } else {
        reject("Failure!");
    }
});
randomPromise
    .then(result => console.log(result))
    .catch(error => console.log(error));

// 8. Fetch and Convert Response to JSON
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => console.log(data)); // Should log the list of users

// 9. Chain Fetch Requests
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(post => {
        console.log(post);
        return fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
    })
    .then(response => response.json())
    .then(user => console.log(user)); // Logs post and user details

// 10. Promise that Resolves or Rejects Based on Input
function validateNumber(num) {
    return new Promise((resolve, reject) => {
        if (num > 5) {
            resolve("Valid number!");
        } else {
            reject("Invalid number!");
        }
    });
}
validateNumber(6)
    .then(result => console.log(result))
    .catch(error => console.log(error));

// 11. Propagate Errors Through Multiple .then()
const errorPropagationPromise = new Promise((resolve, reject) => {
    const randomNum = Math.random();
    if (randomNum > 0.5) {
        resolve("All good!");
    } else {
        reject("Oops! Something went wrong.");
    }
});
errorPropagationPromise
    .then(result => console.log(result))
    .catch(error => {
        console.log(error);
        throw new Error("Error propagated.");
    })
    .catch(err => console.log(err.message));

// 12. Transform Fetched Data
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        const usernames = data.map(user => user.username);
        console.log(usernames); // Should log array of usernames
    });

// 13. Resolve or Reject Based on Boolean
function actionBasedOnFlag(flag) {
    return new Promise((resolve, reject) => {
        if (flag) {
            resolve("Action successful!");
        } else {
            reject("Action failed!");
        }
    });
}
actionBasedOnFlag(true)
    .then(result => console.log(result))
    .catch(error => console.log(error));

// 14. Fetch and Return Specific Data
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data[0].title)); // Should log the title of the first post

// 15. Chain Fetch Requests with User and Posts
fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(user => {
        console.log(user);
        return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
    })
    .then(response => response.json())
    .then(posts => console.log(posts)); // Logs user details and user posts
