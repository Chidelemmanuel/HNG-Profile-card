

#  Profile Card Component

A small, accessible, and responsive Profile Card built with semantic HTML, modern CSS (Flexbox/Grid), and vanilla JavaScript.  
The component displays a user’s name, bio, avatar, hobbies, dislikes, social links, and the current time in milliseconds — all following the exact `data-testid` attributes required for automated testing.

---

## Live 

 GitHub Repository: [https://owens01.github.io/profile-card-frontend/
](https://owens01.github.io/profile-card-frontend/
)

---

##  Features

✅ Fully responsive layout (mobile → desktop)  
✅ Uses semantic HTML elements (`<article>`, `<figure>`, `<section>`, `<nav>`, etc.)  
✅ Accessible keyboard navigation & focus styles  
✅ Real-time display of current time (milliseconds)  
✅ Avatar supports uploaded or external image URL  
✅ Gradient background & smooth hover effects  
✅ All elements include required `data-testid` attributes for automated tests

---

##  Data-TestID Reference

| Element | data-testid |
|----------|--------------|
| Profile Card | `test-profile-card` |
| Name | `test-user-name` |
| Biography | `test-user-bio` |
| Time (milliseconds) | `test-user-time` |
| Avatar Image | `test-user-avatar` |
| Social Links Container | `test-user-social-links` |
| Individual Social Link | `test-user-social-<network>` |
| Hobbies List | `test-user-hobbies` |
| Dislikes List | `test-user-dislikes` |

---

##  How to Run Locally

1. Clone this repository
   ```bash
   git clone https://github.com/your-username/profile-card.git
