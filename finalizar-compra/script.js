const paymentButton = document.getElementById("pay")
const productName = document.getElementById("product-name")
const productImage = document.getElementById("product-image")
const product = new URLSearchParams(window.location.search).get("product")
const supportInfo = document.getElementById("support-info")

if (product === "mola") {
    productName.textContent = "Captcha Mola"
    productImage.src = "https://i.ibb.co/6cXcyxsH/258-87-433-5317-3.png"
} else {
    productName.textContent = "Chat Money"
    productImage.src = "https://i.ibb.co/k2sgc1fm/images-6.png"

}

function redirect(data) {
    try {
        const output = document.getElementById('output');

        if (!data?.status) {
            console.log("Resposta inválida:", data);
            output.textContent = "Erro ao realizar pagamento";
            return;
        }

        if (data.status === 201 || data.status === "201") {
            // redireciona em caso de sucesso
            window.location.href = 'acess.html';
        } else {
            output.textContent = "Erro ao realizar pagamento";
        }
    } catch (error) {
        console.log("Erro na função redirect:", error);
    }
}


async function ProcessPayment() {
    try {
        paymentButton.style.opacity = "50%";
        paymentButton.disabled = true;

        const radio = document.querySelector('input[name="pagamento"]:checked').value;
        const inputMpesa = document.getElementById('mpesa-number').value;
        const inputEmola = document.getElementById('emola-number').value;
        const buyerName = document.getElementById("buyer-name").value;
        const buyerEmail = document.getElementById("buyer-email").value;

        // gerar token
        const token_request = await axios.post("https://payment.droopay.com/api/oauth/token", {
            client_id: "c0f280e4-7e71-4711-ae4c-745dba742d17",
            client_secret: "pY2c_jToRW4GXpK7B8HXM"
        });
        const token = token_request.data.access_token;

        let pay_request;

        if (radio === 'mpesa') {
            pay_request = await axios.post("https://payment.droopay.com/api/open/payment/mpesa/live", {
                payment_number: String(inputMpesa),
                amount: "197",
                buyer_name: buyerName,
                buyer_email: buyerEmail
            }, {
                headers: { Authorization: `Bearer ${token}` }
            });
        } else {
            pay_request = await axios.post("https://payment.droopay.com/api/open/payment/v1/emola/live", {
                payment_number: String(inputEmola),
                amount: "197",
                buyer_name: buyerName,
                buyer_email: buyerEmail
            }, {
                headers: { Authorization: `Bearer ${token}` }
            });
        }

        // só chama redirect com a resposta válida
        redirect(pay_request.data);

    } catch (error) {
        console.log("Erro no pagamento:", error);
        const output = document.getElementById('output');
        output.textContent = "Erro ao processar pagamento.";
        supportInfo.classList.remove("hidden");
    } finally {
        paymentButton.style.opacity = "100%";
        paymentButton.disabled = false;
    }
}

paymentButton.addEventListener("click", async () => {
    await ProcessPayment()
})
