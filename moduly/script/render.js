
function sendForm(e){
     
    var keyBox = document.search.key;
    var val = keyBox.value;
    
}
 
var sendButton = document.search.send;
sendButton.addEventListener("click", sendForm);

class Img{
    
    mount(parrent) {
        this._parrent = parrent;
        this.render();
        this.addEventListners();
        this.createClickHadlers();
        this.addErrorMessage();
    }
    render() {
        this._parrent.innerHTML = this.searchInputHtml + this.usersToTableHtml + this.addFormHtml + this.editFormHtml;
    }
    addEventListners() {
    
        document.addEventListener("Редагувати", event => {
            super.update(event.detail.id, event.detail);
            this.render();
        });

        document.addEventListener("search", event => {
            this.searchString = event.detail.searchString;
            this.render();
        });
    }

}

