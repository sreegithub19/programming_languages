# code not working
# pip3 install tempMail2

from tempMail2 import TempMail

tm = TempMail()
email = tm.get_email_address()  # v5gwnrnk7f@gnail.pw
print(tm.get_mailbox(email)) # list of emails

# tm = TempMail(login='denis', domain='@gnail.pw')
# print(tm.get_mailbox())  # list of emails in denis@gnail.pw