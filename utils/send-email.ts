import { FormData } from '@/components/Contact';
import { FormDataProduct } from '@/components/ContactProducts';

export function sendEmail(data: FormData | FormDataProduct) {
    const apiEndpoint = '/api/email';

    fetch(apiEndpoint, {
        method: 'POST',
        body: JSON.stringify(data),
    })
        .then((res) => res.json())
        .then((response) => {
            alert(response.message);
        })
        .catch((err) => {
            alert(err);
        });
}