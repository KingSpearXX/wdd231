async function loadImages() {
  try {
    const response = await fetch("./data/images.json");
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }

    const data = await response.json();
    const images = data.map((image) => ({
      name: image.name,
      flavor: image.flavor,
      imageUrl: image.imageUrl,
      templeName: image.templeName,
    }));

    const container = document.getElementById("image-grid");
    createImageCard(container, images);

  } catch (error) {
    console.error("Error fetching images:", error);
  }
}

function createImageCard(container, temples) {
  if (!container) {
    console.error("No div found with id 'image-grid'");
    return;
  }

  container.innerHTML = "";

  for (const image of temples) {
    const card = document.createElement("div");
    card.classList.add("image-card");

    const title = document.createElement("h2");
    title.textContent = image.name;
    card.appendChild(title);

    const flavor = document.createElement("p");
    flavor.textContent = image.flavor;
    card.appendChild(flavor);

    const figure = document.createElement("figure");
    const img = document.createElement("img");
    img.src = image.imageUrl;
    img.alt = image.templeName;
    img.loading = "lazy";
    img.classList.add("temple-image");
    figure.appendChild(img);
    card.appendChild(figure);

    container.appendChild(card);
  }
}

// Call the loader
loadImages();
