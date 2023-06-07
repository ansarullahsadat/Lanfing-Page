"use strict"

const sign = document.querySelectorAll(".sign")
const arr = document.querySelectorAll(".arr")
const signContent = document.querySelectorAll(".sign-content")
const navBtn = document.querySelectorAll(".nav-btn")
const navbar = document.querySelector(".navbar")

sign.forEach((s) =>
  s.addEventListener("click", function (e) {
    e.preventDefault()
    arr.forEach((a) => a.classList.toggle("hidden"))

    signContent.forEach((s) => s.classList.toggle("scale-0"))
    signContent.forEach((s) => s.classList.toggle("h-[0]"))
  })
)

navBtn.forEach((n) =>
  n.addEventListener("click", () => {
    navbar.classList.toggle("translate-x-full")
    signContent.forEach((s) => s.classList.add("scale-0", "h-[0]"))
  })
)

document.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", (e) => {
    e.preventDefault()
  })
)
