function markAllAsRead(): void {
    let activeClasses: NodeList = document.querySelectorAll(".notification-body-container") as NodeList
    let activeIcons: NodeList = document.querySelectorAll(".notification-read-toggle") as NodeList

    let newActiveClasses: HTMLDivElement[] = Array.from(activeClasses) as HTMLDivElement[]
    let newActiveIcons = Array.from(activeIcons) as HTMLDivElement[]

    newActiveClasses.forEach((item: HTMLDivElement, index: number): void => {
        if (item.classList.contains("active") && index <= 2) {
            item.classList.remove("active")
        } else if (index <= 2){
            item.classList.add("active")
        }
    })

    newActiveIcons.forEach((item: HTMLSpanElement): void => {
        if (item.classList.contains("notification-read-toggle-disable")) {
            item.classList.remove("notification-read-toggle-disable")
        } else {
            item.classList.add("notification-read-toggle-disable")
        }
    })
}