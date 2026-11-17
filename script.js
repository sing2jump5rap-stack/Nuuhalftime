// 自動標出「本月」那一列：加底色＋「本月」文字，不只靠顏色
const month = new Date().getMonth() + 1;
const row = document.querySelector(`tr[data-month="${month}"]`);
if (row) {
  row.classList.add("now");
  row.setAttribute("aria-current", "date");
  row.querySelector("th").insertAdjacentHTML("beforeend", ' <span class="badge">本月</span>');
}
