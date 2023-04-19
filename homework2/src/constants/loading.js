const loader = document.createElement("div");
loader.innerText = "Loading...";
loader.classList.add("loader");
document.body.appendChild(loader);

export const showLoader = () => (loader.style.display = "block");
export const hideLoader = () => (loader.style.display = "none");
