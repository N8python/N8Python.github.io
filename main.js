new Vivus('about', {
    duration: 500
});
new Vivus("projects", {
    duration: 500
})
new Vivus("blog", {
    duration: 500
})
const about = document.getElementById("about");
const projects = document.getElementById("projects");
const blog = document.getElementById("blog");
const main = document.getElementById("main");
let mode = "none";
about.onclick = async() => {
    if (mode !== "about") {
        mode = "about";
        const html = await fetch("about.html");
        const text = await html.text();
        main.classList.remove("w3-animate-left");
        setTimeout(() => {
            main.innerHTML = text;
            main.classList.add("w3-animate-left")
        }, 100)
    }
}
projects.onclick = async() => {
    if (mode !== "projects") {
        mode = "projects";
        const html = await fetch("projects.html");
        const text = await html.text();
        main.classList.remove("w3-animate-left")
        setTimeout(() => {
            main.innerHTML = text;
            main.classList.add("w3-animate-left")
        }, 100)
    }
}
window.onload = async() => {
    if (mode !== "projects") {
        mode = "projects";
        const html = await fetch("projects.html");
        const text = await html.text();
        main.classList.remove("w3-animate-left")
        setTimeout(() => {
            main.innerHTML = text;
            main.classList.add("w3-animate-left")
        }, 100)
    }
}
const posts = [
    ["Phaser Review", "March 25, 2020"],
    ["Typing in Programming Languages", "March 11, 2020"],
    ["Hello World", "March 3, 2020"]
];
const idify = string => string.toLowerCase().replace(/\s/g, "-");
const converter = new showdown.Converter();
blog.onclick = () => {
    if (mode !== "blog") {
        mode = "blog";
        main.classList.remove("w3-animate-left")
        setTimeout(() => {
            main.innerHTML = posts.map(([name, date]) => `<p id="${idify(name)}" style="cursor:pointer" class="w3-text-white">${name} - ${date}</p>`).join("\n");
            main.classList.add("w3-animate-left")
            posts.map(([name]) => idify(name)).forEach(id => {
                document.getElementById(id).onclick = async() => {
                    mode = id;
                    const md = await fetch(`${id}.md`);
                    const text = converter.makeHtml(await md.text());
                    main.classList.remove("w3-animate-left")
                    setTimeout(() => {
                        main.innerHTML = text;
                        main.classList.add("w3-animate-left")
                    }, 100)
                }
            })
        }, 100);
    }
}