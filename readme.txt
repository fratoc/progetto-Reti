per far funzionare https, aprire un altro terminale (sempre in VS)
e scrivere il seguente comando:

    ssh -R 80:localhost:3000 localhost.run

se quest'ultimo non funziona vuol dire che non si ha la chiave, per generarla
basta digitare il seguente comando:

        ssh-keygen -t rsa

che genera una chiave che poi servirà per creare il ''DNS'' su cui girerà il sito

Dopo aver generato la chiave(per comodita lasciare tutto a null (anche pswd))
riscrivere il seguente comando sul terminale:

        ssh -R 80:localhost:3000 localhost.run

questo genererà un link tramite il quale si potrà accedere al sito via web
ed ottenere il tutto il https.
Dovrebbe comparire una cosa simile una volta premuto invio:


===============================================================================


** your connection id is 584a5548-88ae-46e7-a6f7-d4c63f0c39b7, please mention it
if you send me a message about an issue. **

72ebd946d87960.lhrtunnel.link tunneled with tls termination,
https://72ebd946d87960.lhrtunnel.link

===============================================================================

--> allora il sito sarà disponibile all'indirizzo
     https://72ebd946d87960.lhrtunnel.link