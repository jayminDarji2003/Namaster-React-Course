// <!--  create element using JAVASCRIPT -->
//     <!-- <Script> -->
//     <!-- const heading = document.createElement("h1"); -->
//     <!-- heading.innerHTML = "Namaste React!!!"; -->
//     <!-- const root = document.getElementById("root"); -->
//     <!-- root.appendChild(heading); -->
//     <!-- </Script> -->

//     <!-- React CDN links  -->


// <!-- Create element using React  -->
const heading2 = React.createElement("h2", {
    id: "heading2"
}, "Heading 2");
const heading3 = React.createElement("h3", {
    id: "heading3"
}, "Heading 3");
const heading4 = React.createElement("h4", {
    id: "heading4"
}, "Heading 4");

const heading = React.createElement("div", {
    id: "headingContainer"
}, [heading2, heading3, heading4]);

console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);