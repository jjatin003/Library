function deletes(d) {
    const rowindex = (d.parentNode.parentNode.rowIndex);
    const tabledel = document.getElementsByTagName('tr')[rowindex];
    const table_body = document.getElementsByTagName('tbody')[0];
    table_body.removeChild(tabledel);
}


class book {
    constructor(bookname, author, category) {
        this.bookname = bookname
        this.author = author
        this.category = category
    }

}

class displaybook {
    constructor(book) {
        this.book = book
    }
    addbook() {
        const tbody = document.getElementById('tbody');
        var i = 1
        const data = document.createElement('tr');

        data.innerHTML = `<th scope="row">1</th>
                        <td>${this.book.bookname}</td >
                        <td>${this.book.author}</td>
                        <td>${this.book.category}</td>
                        <td> <button class='btn btn-primary' onclick={deletes(this)}>Delete</button></td>`
        i = i + 1;
        tbody.append(data);
    }

}


let libraryform = document.getElementById('library_form');

libraryform.addEventListener('submit', libraryformsubmit);

function libraryformsubmit(e) {
    e.preventDefault();
    const bookname = document.getElementById('bookname').value;
    const author = document.getElementById('author').value;
    const Cooking = document.getElementById('Cooking');
    const Coding = document.getElementById('Coding');
    const Adventure = document.getElementById('Adventure');
    const alerts = document.getElementById('alerts');
    let category = ""
    if (Coding.checked) {
        category = "coding"
    }
    else if (Cooking.checked) {
        category = "cooking"
    }
    else {
        category = "Adventure"
    }
    if (bookname != '' && author != '') {
        const B1 = new book(bookname, author, category);
        const D1 = new displaybook(B1);
        D1.addbook();
        alerts.innerHTML = `<div class="alert alert-danger" role="alert">Book has been added successfully</div>`
    }
    else {
        alerts.innerHTML = `<div class="alert alert-danger" role="alert">Try inputing all values again</div>`
    }
    libraryform.reset();

    setTimeout(() => {
        alerts.innerHTML = ``
    }, 3000)
}



