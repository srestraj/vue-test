import { defineStore } from 'pinia'

export const useEmailsStore = defineStore({
  id: 'email-store',
  state: () => {
    return {
      emails: [
        {
          id: 1,
          subject: "Your 7-figure plan goes bye-bye at midnight",
          body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia a molestiae eum? Quidem, nesciunt hic nobis, libero nulla eum ad mollitia sequi magni odit, doloremque quas aspernatur vitae? Commodi, repellat.",
          isRead: false,
          isArchived: false
        },
        {
          id: 2,
          subject: "[WEEKEND ONLY] Get this NOW before",
          body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia a molestiae eum? Quidem, nesciunt hic nobis, libero nulla eum ad mollitia sequi magni odit, doloremque quas aspernatur vitae? Commodi, repellat.",
          isRead: false,
          isArchived: false
        },
        {
          id: 3,
          subject: "Uh-oh, your prescription is expiring",
          body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia a molestiae eum? Quidem, nesciunt hic nobis, libero nulla eum ad mollitia sequi magni odit, doloremque quas aspernatur vitae? Commodi, repellat.",
          isRead: true,
          isArchived: false
        },
        {
          id: 4,
          subject: "Uh-oh, your prescription is expiring",
          body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia a molestiae eum? Quidem, nesciunt hic nobis, libero nulla eum ad mollitia sequi magni odit, doloremque quas aspernatur vitae? Commodi, repellat.",
          isRead: true,
          isArchived: false
        },
        {
          id: 5,
          subject: "This one should be archived",
          body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia a molestiae eum? Quidem, nesciunt hic nobis, libero nulla eum ad mollitia sequi magni odit, doloremque quas aspernatur vitae? Commodi, repellat.",
          isRead: true,
          isArchived: true
        }
      ]
    }
  },
  actions: {
    archiveEmail(emailId: number) {
      const updatedEmail: any = this.emails.find((email) => {
        return email.id == emailId
      })
      updatedEmail.isArchived = true
    },

    markAsRead(emailId: number) {
      const updatedEmail: any = this.emails.find((email) => {
        return email.id == emailId
      })
      updatedEmail.isRead = true
    }
  },
  getters: {}
});