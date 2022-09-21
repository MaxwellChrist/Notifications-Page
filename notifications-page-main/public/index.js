"use strict";
function markAllAsRead() {
    let activeClasses = document.querySelectorAll(".notification-body-container");
    let activeIcons = document.querySelectorAll(".notification-read-toggle");
    let newActiveClasses = Array.from(activeClasses);
    let newActiveIcons = Array.from(activeIcons);
    newActiveClasses.forEach((item, index) => {
        if (item.classList.contains("active") && index <= 2) {
            item.classList.remove("active");
        }
        else if (index <= 2) {
            item.classList.add("active");
        }
    });
    newActiveIcons.forEach((item) => {
        if (item.classList.contains("notification-read-toggle-disable")) {
            item.classList.remove("notification-read-toggle-disable");
        }
        else {
            item.classList.add("notification-read-toggle-disable");
        }
    });
}
