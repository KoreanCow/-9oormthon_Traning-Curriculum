import List from './models/List';
import ListItem from './models/ListItem';
import ListTemplate from './templates/ListTemplate';

const initApp = () => {
  const listInstance = List.instance;
  const listTemplateInstance = ListTemplate.instance;

  const itemForm = document.getElementById('form') as HTMLFormElement;

  itemForm.addEventListener('submit', (event: SubmitEvent): void => {
    event.preventDefault();
    // 새 아이템 텍스트
    const inputEl = document.getElementById('item_input')as HTMLInputElement;
    const newText = inputEl.value.trim();
    if(!newText.length) return;
    inputEl.value = '';

    // 새 아이템 아이디

    const itemId: number = listInstance.list.length 
    ? parseInt(listInstance.list[listInstance.list.length - 1].id) + 1
    : 1

    const newItem = new ListItem(itemId.toString(), newText);
    
    listInstance.addItem(newItem);
    listTemplateInstance.render(listInstance);

  });
  
  const clearItemsEl = document.getElementById('clear_items_btn') as HTMLButtonElement;
  clearItemsEl.addEventListener('click', () => {
    listInstance.clearList();
    listTemplateInstance.clear();
  });
  // 초기 데이터 로드 
  listInstance.load();
  // 생성된 데이터 이용해서 화면에서 보여주기 
  listTemplateInstance.render(listInstance);
  
}

initApp();