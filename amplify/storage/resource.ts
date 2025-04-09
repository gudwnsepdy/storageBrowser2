import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'hjoo-storage-test',
  isDefault: true,
   access: (allow) => ({
    '/*': [
        allow.guest.to(['read', 'write']),
        allow.authenticated.to(['read', 'write', 'delete']),
    ]
   })
});

