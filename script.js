const initialProcess = (nameGrasper) => {
  nameGrasper.preventDefault();
  const receiver = nameGrasper.target;

  const listobj = {};

  for (let i = 0; i < receiver.elements.length; i++) {
    if (receiver[i] !== "BUTTON") {
      const receiverValue = receiver[i].value;
      const receiverId = receiver[i].id;
      listobj[receiverId] = receiverValue;
    }
  }

  console.log(listobj);

  const whereToFindName = document.querySelector("#name-receiver");
  const li = document.createElement("li");
  li.innerText = `name: ${listobj.name}`;
  li.style.backgroundColor = "green";
  li.onclick = () => {
    li.style = "text-decoration-line: line-through";
  };
  whereToFindName.appendChild(li);

  const onClickButton = () => {
    li.style = "display: none";
    btn2.style = "display: none";
  };

  const btn2 = document.createElement("button");
  btn2.onclick = onClickButton;
  whereToFindName.appendChild(btn2);
  btn2.innerText = "Click Me";
};
