let expireDate = new Date();
expireDate.setFullYear(expireDate.getFullYear() + 1);

document.cookie = `firstname=Aiden; expires=${expireDate.toUTCString()}`;
document.cookie = `lastname=Adzich`;
document.cookie = `specialchars=${encodeURIComponent(`???!!!@#$%&^*(())`)}`;