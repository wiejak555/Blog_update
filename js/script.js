"use strict";

function titleClickHandler(event) {
  console.log("Link was clicked!");
  console.log(event);

  /* remove class 'active' from all article links  */

  const activeLinks = document.querySelectorAll(".titles a.active");

  for (let activeLink of activeLinks) {
    activeLink.classList.remove("active");
  }
  /* add class 'active' to the clicked link */
  event.preventDefault();
  const clickedElement = this;
  clickedElement.classList.add("active");

  console.log("clickedElement (with plus): " + clickedElement);

  /* remove class 'active' from all articles */

  const activeArticles = document.querySelectorAll(".post");

  for (let activeArticle of activeArticles) {
    activeArticle.classList.remove("active");
  }

  /* get 'href' attribute from the clicked link */

  const articleSelector = clickedElement.getAttribute("href");
  console.log(articleSelector);

  /* find the correct article using the selector (value of 'href' attribute) */

  const targetArticle = document.querySelector(articleSelector);
  console.log(targetArticle);

  /* add class 'active' to the correct article */

  targetArticle.classList.add("active");
}

const links = document.querySelectorAll(".titles a");

for (let link of links) {
  link.addEventListener("click", titleClickHandler);
}
