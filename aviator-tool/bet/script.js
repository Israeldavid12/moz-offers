const paymentButton = document.getElementById("pay")
const infoMessage = document.getElementById("info")


function redirect(data) {
    const output = document.getElementById('output')
    if (!data?.status) return output.textContent = "Erro ao realizar pagamento"

    if (data?.status === "201") {
        window.location.href = 'acess.html'
    } else {
        output.textContent = "Erro ao realizar pagamento"
        return
    }
}


async function ProcessPayment() {
    console.log("click")
    try {
        infoMessage.style.display = "block"
        paymentButton.style.opacity = "50%"
        paymentButton.disabled = true;
        const radio = document.querySelector('input[name="pagamento"]:checked').value;
        const inputMpesa = document.getElementById('mpesa-number').value;
        const inputEmola = document.getElementById('emola-number').value;
        const buyerName = document.getElementById("buyer-name").value;


        const token_request = await axios.post("https://payment.droopay.com/api/oauth/token", {
            client_id: "c0f280e4-7e71-4711-ae4c-745dba742d17",
            client_secret: "pY2c_jToRW4GXpK7B8HXM"
        })
        const token = token_request.data.access_token;




        if (radio === 'mpesa') {
            const pay_request = await axios.post("https://payment.droopay.com/api/open/payment/mpesa/live", {
                payment_number: String(inputMpesa),
                amount: "100",
                buyer_name: buyerName
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            redirect(pay_request.data)
        } else {
            const pay_request = await axios.post("https://payment.droopay.com/api/open/payment/v1/emola/live", {
                payment_number: String(inputEmola),
                amount: "100",
                buyer_name: buyerName
            },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
            redirect(pay_request.data)
        }
    } catch (error) {
        console.log(error)
    } finally {
        paymentButton.style.opacity = "100%"
        paymentButton.disabled = false;
        redirect('')
    }


}

paymentButton.addEventListener("click", async () => {
    await ProcessPayment()
})
