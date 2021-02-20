function forms(){

    const forms = document.querySelectorAll ("form");

    const message = {
        loading:'/img/form/spinner.svg',
        success:'Успешно выполнено',
        failure:'Что-то не так'

    };
    
    forms.forEach(item => {
        bindPostData(item);
    });

    const postData = async (url,data) => {
        const res = await fetch(url, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: data
        });

        return await res.json();
    };



    function bindPostData(form){
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            form.append(statusMessage);      
            const formData = new FormData(form);

            const object = {};
            formData.forEach(function(value, key){
                object[key] = value;                
            });
          
            postData('http://my-json-server.typicode.com/mishazverev/study1/requests', JSON.stringify(object))
            .then(data => {
                    console.log(data);
                    showThanksModal(message.success);
                    statusMessage.remove();
            }).catch(() => {
                    showThanksModal(message.failure);
            }).finally(() => {
                    form.reset();              
            });

        });
    }

    function showThanksModal(message){
        const prevModalDialog = document.querySelector('.modal__dialog');
        prevModalDialog.classList.add('hide');
        openModal();

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class = "modal__content">
                <div class = "modal__close" data-close>×</div>
                <div class = "modal__title">${message}</div>
            </div>
        `;
        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal();
        }, 3000);
    }
    fetch('http://my-json-server.typicode.com/mishazverev/study1/menu')
        .then(data => data.json())
        .then(res => console.log(res));

}

export default forms;