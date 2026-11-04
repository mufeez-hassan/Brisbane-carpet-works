# 📧 EmailJS Complete Setup Guide - Brisbane Carpet Works

**Ye guide follow kar ke aap apne website se emails receive kar sakte hain apne Brisbane email par!**

---

## 🎯 Kya Setup Karna Hai?

Jab koi customer aapki website par quote form bharega, to wo email **Brisbanecarpetworks@gmail.com** par aayegi.

---

## 📋 Step-by-Step Instructions (Screenshots ke sath)

### **STEP 1: EmailJS Account Banaye**

1. Browser mein jaye: **https://www.emailjs.com/**
2. **"Sign Up"** button par click karein
3. Apna email enter karein (koi bhi email - ye sirf login ke liye hai)
4. Password banaye aur account create karein
5. Apne email inbox check karein aur verify karein

---

### **STEP 2: Gmail Service Add Karein**

1. EmailJS dashboard mein **left side** se **"Email Services"** par click karein
2. **"Add New Service"** button par click karein
3. **Gmail** icon select karein
4. **"Connect Account"** par click karein
5. Apna **Brisbanecarpetworks@gmail.com** account select karein aur authorize karein
6. Ek **Service ID** milega (jaise: `service_abc123`)
7. Is **Service ID ko copy** karein aur kisi notepad mein save karein ✅

---

### **STEP 3: Email Template Banaye** (YE SABSE IMPORTANT HAI!)

1. EmailJS dashboard mein **left side** se **"Email Templates"** par click karein
2. **"Create New Template"** button par click karein

Ab aapko **YE SCREEN** dikhegi jo aapki screenshot jaisi hai!

---

## 🎨 **Template Configuration (Exact Fields)**

### **A) LEFT SIDE - Content Tab**

#### **1. Subject Field** (Email ka subject line)
```
New Quote Request from {{from_name}}
```

Ya ye bhi use kar sakte hain:
```
Brisbane Carpet Works - Quote Request
```

---

#### **2. Content Field** (Email ka main message)

**Desktop** tab selected rakhen, aur **Content box** mein YE exact text copy-paste karein:

```
New Quote Request Received from Brisbane Carpet Works Website

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CUSTOMER DETAILS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SERVICE INFORMATION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Service Required: {{service}}
Suburb/Location: {{suburb}}
Preferred Date: {{preferred_date}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CUSTOMER MESSAGE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This email was automatically sent from your website's quote form.
Reply directly to this email to contact the customer.

Brisbane Carpet Works
```

---

### **B) RIGHT SIDE - Settings Panel**

Screenshot mein jo right side par fields hain, **un mein YE enter karein:**

#### **To Email** ⭐ (Sabse important!)
```
brisbanecarpetworks@gmail.com
```
*(Ye wo email hai jahan sab quotes aayengi)*

---

#### **From Name**
```
{{from_name}}
```
*(Customer ka naam yahan automatically aa jayega)*

---

#### **From Email**
☑️ **"Use Default Email Address"** checkbox ko **CHECKED** rakhen
*(Ye EmailJS apna default email use karega)*

---

#### **Reply To**
```
{{from_email}}
```
*(Jab aap email mein Reply button dabayenge, to seedha customer ke email par reply jayegi)*

---

#### **Bcc** (Optional)
Empty chhor sakte hain ya agar backup email chahiye to wahan daal sakte hain.
```

```
*(Khali chhod do agar zaroorat nahi)*

---

#### **Cc** (Optional)
```

```
*(Khali chhod do)*

---

### **3. Template Save Karein**

1. **"Save"** button par click karein (top right corner mein hoga)
2. Ek **Template ID** milega (jaise: `template_xyz789`)
3. Is **Template ID ko copy** karein aur notepad mein save karein ✅

---

### **STEP 4: Public Key Copy Karein**

1. EmailJS dashboard mein **top right** corner mein apne **account name/icon** par click karein
2. **"Account"** select karein
3. Neeche scroll karein, **"API Keys"** section mein **Public Key** dikhega
4. **Public Key ko copy** karein (jaise: `xYz123AbC456`)
5. Notepad mein save karein ✅

---

### **STEP 5: Apne Project Mein Configuration Dalein**

Ab aapke paas teen cheezein hongi:
- ✅ **Service ID** (jaise: `service_abc123`)
- ✅ **Template ID** (jaise: `template_xyz789`)
- ✅ **Public Key** (jaise: `xYz123AbC456`)

---

**1. VS Code mein apna project folder kholein:**
```
d:\sadia project\carpet
```

**2. `.env` file kholein** (agar nahi hai to bana lein)

**3. In teen lines ko edit karein:**

```env
VITE_EMAILJS_SERVICE_ID=apni_service_id_yahan_paste_karein
VITE_EMAILJS_TEMPLATE_ID=apni_template_id_yahan_paste_karein
VITE_EMAILJS_PUBLIC_KEY=apni_public_key_yahan_paste_karein
```

**Example (apni actual IDs use karein):**
```env
VITE_EMAILJS_SERVICE_ID=service_h8k3m2p
VITE_EMAILJS_TEMPLATE_ID=template_9xj4n6q
VITE_EMAILJS_PUBLIC_KEY=BxP4kL9mR2sN7vZ3
```

**4. File save karein** (Ctrl + S)

---

### **STEP 6: Development Server Restart Karein**

Terminal mein:
1. Agar server chal raha hai to **Ctrl + C** se stop karein
2. Phir se start karein:
```bash
npm run dev
```

---

### **STEP 7: Test Karein!**

1. Browser mein apni website kholein (jaise: `http://localhost:5173`)
2. Quote form bharein:
   - Naam likhen
   - Phone number likhen
   - Email likhen
   - Service select karein
   - Suburb likhen
   - Message likhen
3. **"GET A FREE QUOTE"** button dabaye
4. Agar **green success message** aaya to form submit ho gaya! ✅

5. **Apna email check karein:** `Brisbanecarpetworks@gmail.com`
6. Email aana chahiye with customer ki details! 🎉

---

## 🔧 Agar Email Nahi Aaye (Troubleshooting)

### Problem 1: Email nahi aa rahi
✅ **Spam/Junk folder** check karein
✅ Gmail inbox mein search karein: **"from:EmailJS"**
✅ EmailJS dashboard mein **"History"** check karein kya email send hui thi

### Problem 2: Error message aa raha hai
✅ `.env` file mein **Service ID, Template ID, aur Public Key** sahi hain?
✅ Koi space ya extra character to nahi?
✅ Server **restart** kiya tha?

### Problem 3: Form submit nahi ho raha
✅ Browser **Console** kholein (F12 press karein)
✅ Koi red error messages dekhein
✅ Internet connection check karein

---

## 📊 Variables Summary

Aapke code mein ye variables automatically bheje ja rahe hain EmailJS ko:

| Variable | Kya Hai | Example |
|----------|---------|---------|
| `{{from_name}}` | Customer ka naam | "Ahmad Khan" |
| `{{from_email}}` | Customer ka email | "ahmad@email.com" |
| `{{phone}}` | Customer ka phone | "0412345678" |
| `{{service}}` | Konsi service chahiye | "Carpet Patching" |
| `{{suburb}}` | Konsa area | "Brisbane CBD" |
| `{{preferred_date}}` | Kaunsi date prefer | "2026-10-15" |
| `{{message}}` | Customer ka message | "I need carpet repair..." |
| `{{subject}}` | Email subject | Auto-generated |

---

## ✅ Final Checklist

- [ ] EmailJS account bana liya
- [ ] Gmail service connect kar li
- [ ] Email template bana liya (Content + Right side settings)
- [ ] Service ID copy kar li
- [ ] Template ID copy kar li
- [ ] Public Key copy kar li
- [ ] `.env` file mein sab IDs daal di
- [ ] Server restart kiya
- [ ] Form test kiya
- [ ] Email receive hui ✅

---

## 🎉 Ho Gaya!

Ab jab bhi koi customer aapki website par quote request karega, aapko **Brisbanecarpetworks@gmail.com** par email mil jayegi!

**Koi problem ho to mujhe bataye! 😊**
