const upload = (id) => {
  const edit = document.getElementById(`edit${id}`);
  const message = document.getElementById(`${id}`);
  edit.classList.remove("hidden");
  message.classList.add("hidden");
};

const remove = () => {
  const hilite = document.getElementById("pc");
  hilite.classList.remove("halite1");
  hilite.classList.add("halite");
  console.log("ok");
};

const note = () => {
  const hilite = document.getElementById("pc");
  hilite.classList.remove("halite");
  hilite.classList.add("halite1");
  const myTime = setTimeout(remove, 3000);
};

const createMess = () => {
  const name = document.getElementById("name");
  const text = document.getElementById("text");

  const message = {
    name: name.value,
    text: text.value,
  };
  createMessage(message);
  name.value = "";
  text.value = "";
};

createMessage = async (message) => {
  try {
    await fetch("http://localhost:3000", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(message),
    });
    note();
  } catch (err) {
    console.log("An err found ", err);
  } finally {
    fetchMessage();
  }
};

const fetchMessage = async () => {
  let data;

  try {
    const res = await fetch("http://localhost:3000/");
    data = await res.json();
    showMessage(data);
  } catch (err) {
    console.log("Error form fetch data");
  }
};

const showMessage = (message) => {
  const content = document.getElementById("bodes");
  content.innerHTML = "<h1>MESSAGE</h1>";

  message.map((data, index) => {
    if (index == 0) {
      return;
    }
    const div = document.createElement("div");
    div.classList.add("mess");
    const { id, name, text } = data;

    div.innerHTML = `
        <div id="${id}" class="message">
          <h1>${name}</h1>
          <p>
            ${text}
          </p>
          <div class="direction">
            <button id="update" onclick="upload(${id})" class="btn">UPDATE</button>
            <button id="delete" onclick="deleteMessage(${id})" class="btn">DELETE</button>
          </div>
        </div>
        <div id="edit${id}" class="edit hidden">
          <h1>Edit Message</h1>
          <input id="upName${id}" type="text" value="${name}" class="nameU" />
          <textarea id="upText${id}" class="textU" rows="5" cols="45">
            ${text}
          </textarea>
          <button id="update" class="btn" onclick="updateText(${id})">UPDATE</button>
        </div>
    `;

    content.appendChild(div);
  });
};

const updateText = (id) => {
  const name = document.getElementById(`upName${id}`);
  const text = document.getElementById(`upText${id}`);
  const data = {
    id,
    name: name.value,
    text: text.value,
  };
  updated(data);
};

const updated = async (data) => {
  try {
    await fetch("http://localhost:3000/", {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    note();
  } catch (err) {
    console.log("An err found ", err);
  } finally {
    fetchMessage();
  }
};

const deleteMessage = async (id) => {
  try {
    await fetch("http://localhost:3000/", {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    });
    note();
  } catch (err) {
    console.log("An err found ", err);
  } finally {
    fetchMessage();
  }
};

fetchMessage();
