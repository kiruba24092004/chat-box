function checkSymptom() {
  let symptom = document.getElementById("symptom").value;
  let lang = document.getElementById("language").value;
  let result = document.getElementById("result");

  let responses = {
    english: {
      chest: ["⚠️ Chest pain may be serious. Seek medical help immediately.", "💡 Solution: Visit a hospital urgently, avoid physical strain."],
      headache: ["💊 Drink water, rest well. If severe, consult a doctor.", "💡 Solution: Take paracetamol, reduce screen time."],
      breathing: ["⚠️ Difficulty in breathing is critical. Call emergency.", "💡 Solution: Sit upright, use inhaler if prescribed, seek help immediately."],
      unconscious: ["⚠️ Unconsciousness is an emergency. Seek medical help.", "💡 Solution: Lay the person on their side, call emergency services."],
      fever: ["🌡️ Take rest, drink fluids. If fever persists, see a doctor.", "💡 Solution: Use cold compress, take paracetamol if needed."],
      nausea: ["🤢 Avoid oily food. If persistent, consult a doctor.", "💡 Solution: Drink ginger tea or lemon water."],
      abdominal: ["🩺 Could be gastritis or infection. Monitor & consult if severe.", "💡 Solution: Eat light meals, avoid spicy food."],
      backpain: ["🧍 Stretch gently, apply heat pad. If severe, see doctor.", "💡 Solution: Correct posture, avoid lifting heavy weights."],
      cough: ["🤧 Stay hydrated, use steam inhalation. See doctor if >1 week.", "💡 Solution: Drink warm water with honey, avoid cold drinks."],
      diarrhea: ["💧 Drink ORS solution. If severe, seek treatment.", "💡 Solution: Eat bananas/rice, keep hydrated with ORS."],
      bleeding: ["🚨 Severe bleeding – seek emergency help immediately.", "💡 Solution: Apply pressure to wound, call emergency immediately."]
    },
    tamil: {
      chest: ["⚠️ மார்பு வலி மிகவும் ஆபத்தானது. உடனே மருத்துவரை அணுகவும்.", "💡 தீர்வு: உடனே மருத்துவமனைக்கு செல்லவும், அதிக சுமை தவிர்க்கவும்."],
      headache: ["💊 தண்ணீர் குடிக்கவும், ஓய்வெடுக்கவும். கடுமையாக இருந்தால் மருத்துவரை பார்க்கவும்.", "💡 தீர்வு: பாராசெட்டமால் எடுத்துக்கொள்ளலாம், கணினி/மொபைல் நேரம் குறைக்கவும்."],
      breathing: ["⚠️ சுவாசிக்க சிரமம் – அவசர சிகிச்சை தேவை.", "💡 தீர்வு: நேராக உட்காரவும், வைத்தியர் கொடுத்த இன்ஹேலர் பயன்படுத்தவும்."],
      unconscious: ["⚠️ மயக்கம் – உடனே மருத்துவ உதவி பெறவும்.", "💡 தீர்வு: பக்கமாக படுக்க வைத்து உடனே ஆம்புலன்ஸ் அழைக்கவும்."],
      fever: ["🌡️ ஓய்வு எடுக்கவும், அதிக தண்ணீர் குடிக்கவும். நீடித்தால் மருத்துவரை பார்க்கவும்.", "💡 தீர்வு: குளிர்ந்த துணியால் துடைக்கவும், பாராசெட்டமால் எடுத்துக்கொள்ளலாம்."],
      nausea: ["🤢 கொழுப்பு உணவுகளை தவிர்க்கவும். நீடித்தால் மருத்துவரை பார்க்கவும்.", "💡 தீர்வு: இஞ்சி டீ அல்லது எலுமிச்சை நீர் குடிக்கவும்."],
      abdominal: ["🩺 வயிற்று வலி – கவனமாக இருக்கவும், கடுமையாக இருந்தால் மருத்துவரை பார்க்கவும்.", "💡 தீர்வு: இலகுரக உணவு மட்டும் சாப்பிடவும், கார உணவுகளை தவிர்க்கவும்."],
      backpain: ["🧍 மெதுவாக நீட்டிப்பு செய்யவும், சூடு வைத்துப் பார்க்கவும்.", "💡 தீர்வு: உட்காரும் முறையை சீர்செய்யவும், கனமான பொருட்களை தூக்க வேண்டாம்."],
      cough: ["🤧 நீராவி வாங்கவும், தண்ணீர் அதிகம் குடிக்கவும். நீடித்தால் மருத்துவரை பார்க்கவும்.", "💡 தீர்வு: தேன் கலந்து வெந்நீர் குடிக்கவும், குளிர்பானங்கள் தவிர்க்கவும்."],
      diarrhea: ["💧 ORS குடிக்கவும். கடுமையாக இருந்தால் மருத்துவரை பார்க்கவும்.", "💡 தீர்வு: வாழைப்பழம்/அரிசி சாப்பிடவும், அதிக தண்ணீர் குடிக்கவும்."],
      bleeding: ["🚨 கடுமையான இரத்தக் கசிவு – அவசர சிகிச்சை தேவை.", "💡 தீர்வு: காயத்தில் அழுத்தம் கொடுக்கவும், உடனே ஆம்புலன்ஸ் அழைக்கவும்."]
    },
    hindi: {
      chest: ["⚠️ सीने में दर्द गंभीर हो सकता है। तुरंत डॉक्टर से संपर्क करें।", "💡 समाधान: तुरंत अस्पताल जाएं, भारी काम न करें।"],
      headache: ["💊 पानी पिएं, आराम करें। ज्यादा हो तो डॉक्टर को दिखाएं।", "💡 समाधान: पेरासिटामोल लें, स्क्रीन टाइम कम करें।"],
      breathing: ["⚠️ सांस लेने में कठिनाई – तुरंत इलाज करवाएं।", "💡 समाधान: सीधा बैठें, इनहेलर इस्तेमाल करें (यदि डॉक्टर ने दिया हो)।"],
      unconscious: ["⚠️ बेहोशी – तुरंत चिकित्सा सहायता लें।", "💡 समाधान: व्यक्ति को करवट लिटाएं और एम्बुलेंस बुलाएं।"],
      fever: ["🌡️ आराम करें, पानी पिएं। लंबे समय तक रहे तो डॉक्टर से मिलें।", "💡 समाधान: ठंडी पट्टी रखें, पेरासिटामोल लें।"],
      nausea: ["🤢 तैलीय भोजन से बचें। लंबे समय तक रहे तो डॉक्टर से मिलें।", "💡 समाधान: अदरक की चाय या नींबू पानी पिएं।"],
      abdominal: ["🩺 पेट दर्द – संक्रमण हो सकता है। गंभीर हो तो डॉक्टर से मिलें।", "💡 समाधान: हल्का खाना खाएं, मसालेदार भोजन न लें।"],
      backpain: ["🧍 हल्का व्यायाम करें, गर्म सिंकाई करें। ज्यादा दर्द हो तो डॉक्टर से मिलें।", "💡 समाधान: बैठने का तरीका सही करें, भारी सामान न उठाएं।"],
      cough: ["🤧 पानी पिएं, भाप लें। एक हफ्ते से ज्यादा रहे तो डॉक्टर को दिखाएं।", "💡 समाधान: शहद के साथ गुनगुना पानी पिएं।"],
      diarrhea: ["💧 ORS पिएं। ज्यादा होने पर डॉक्टर से मिलें।", "💡 समाधान: केला/चावल खाएं, ORS लें।"],
      bleeding: ["🚨 गंभीर रक्तस्राव – तुरंत आपातकालीन सहायता लें।", "💡 समाधान: घाव पर दबाव डालें और तुरंत अस्पताल जाएं।"]
    }
  };

  if(symptom === "") {
    result.innerHTML = "⚠️ Please select a symptom.";
  } else {
    let [message, solution] = responses[lang][symptom];
    result.innerHTML = `${message}<br><br>${solution}`;
  }
}
