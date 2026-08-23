(function(){
  // ---- full adhkar library (categories -> items) ----
  const ADHKAR_DATA = {"أَذْكَارٌ بَعْدَ الصَّلَاةِ الْمَفْرُوضَةِ": {"Audio": "", "Adhkar": [{"Text": "أَسْتَغْفِرُ اللَّهَ، أَسْتَغْفِرُ اللَّهَ، أَسْتَغْفِرُ اللَّهَ", "Count": 3, "Reference": "كتاب «أذكار: أذكار يحتاجها كل مسلم» — جمع وإعداد: مروان الذرحاني"}, {"Text": "اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ، تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ", "Count": 1, "Reference": "كتاب «أذكار: أذكار يحتاجها كل مسلم» — جمع وإعداد: مروان الذرحاني"}, {"Text": "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ", "Count": 1, "Reference": "كتاب «أذكار: أذكار يحتاجها كل مسلم» — جمع وإعداد: مروان الذرحاني"}, {"Text": "اللَّهُمَّ لَا مَانِعَ لِمَا أَعْطَيْتَ، وَلَا مُعْطِيَ لِمَا مَنَعْتَ، وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ", "Count": 1, "Reference": "كتاب «أذكار: أذكار يحتاجها كل مسلم» — جمع وإعداد: مروان الذرحاني"}, {"Text": "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ، لَا إِلَهَ إِلَّا اللَّهُ، وَلَا نَعْبُدُ إِلَّا إِيَّاهُ، لَهُ النِّعْمَةُ وَلَهُ الْفَضْلُ وَلَهُ الثَّنَاءُ الْحَسَنُ", "Count": 1, "Reference": "كتاب «أذكار: أذكار يحتاجها كل مسلم» — جمع وإعداد: مروان الذرحاني"}, {"Text": "لَا إِلَهَ إِلَّا اللَّهُ مُخْلِصِينَ لَهُ الدِّينَ وَلَوْ كَرِهَ الْكَافِرُونَ", "Count": 1, "Reference": "كتاب «أذكار: أذكار يحتاجها كل مسلم» — جمع وإعداد: مروان الذرحاني"}, {"Text": "اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ", "Count": 1, "Reference": "كتاب «أذكار: أذكار يحتاجها كل مسلم» — جمع وإعداد: مروان الذرحاني"}, {"Text": "سُبْحَانَ اللَّهِ", "Count": 33, "Reference": "كتاب «أذكار: أذكار يحتاجها كل مسلم» — جمع وإعداد: مروان الذرحاني"}, {"Text": "الْحَمْدُ لِلَّهِ", "Count": 33, "Reference": "كتاب «أذكار: أذكار يحتاجها كل مسلم» — جمع وإعداد: مروان الذرحاني"}, {"Text": "اللَّهُ أَكْبَرُ", "Count": 33, "Reference": "كتاب «أذكار: أذكار يحتاجها كل مسلم» — جمع وإعداد: مروان الذرحاني"}, {"Text": "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ (تَمَامَ الْمِائَةِ)", "Count": 1, "Reference": "كتاب «أذكار: أذكار يحتاجها كل مسلم» — جمع وإعداد: مروان الذرحاني"}, {"Text": "قِرَاءَةُ آيَةِ الْكُرْسِيِّ", "Count": 1, "Reference": "كتاب «أذكار: أذكار يحتاجها كل مسلم» — جمع وإعداد: مروان الذرحاني"}, {"Text": "قِرَاءَةُ سُورَةِ الْإِخْلَاصِ وَالْمُعَوِّذَتَيْنِ (وَتُقْرَأُ ثَلَاثًا بَعْدَ الْفَجْرِ وَالْمَغْرِبِ)", "Count": 1, "Reference": "كتاب «أذكار: أذكار يحتاجها كل مسلم» — جمع وإعداد: مروان الذرحاني"}, {"Text": "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، يُحْيِي وَيُمِيتُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ (وَتُقَالُ عَشْرَ مَرَّاتٍ بَعْدَ الْفَجْرِ وَالْمَغْرِبِ)", "Count": 1, "Reference": "كتاب «أذكار: أذكار يحتاجها كل مسلم» — جمع وإعداد: مروان الذرحاني"}]}, "أَذْكَارُ الصَّبَاحِ وَالْمَسَاءِ": {"Audio": "", "Adhkar": [{"Text": "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذَا الْيَوْمِ وَخَيْرَ مَا بَعْدَهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذَا الْيَوْمِ وَشَرِّ مَا بَعْدَهُ، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ (وَفِي الْمَسَاءِ: أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ...)", "Count": 1, "Reference": "كتاب «أذكار: أذكار يحتاجها كل مسلم» — جمع وإعداد: مروان الذرحاني"}, {"Text": "اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ وَإِلَيْكَ النُّشُورُ (وَفِي الْمَسَاءِ: وَإِلَيْكَ الْمَصِيرُ)", "Count": 1, "Reference": "كتاب «أذكار: أذكار يحتاجها كل مسلم» — جمع وإعداد: مروان الذرحاني"}, {"Text": "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ (سَيِّدُ الِاسْتِغْفَارِ)", "Count": 1, "Reference": "كتاب «أذكار: أذكار يحتاجها كل مسلم» — جمع وإعداد: مروان الذرحاني"}, {"Text": "اللَّهُمَّ مَا أَصْبَحَ بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ فَمِنْكَ وَحْدَكَ لَا شَرِيكَ لَكَ، فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ (وَفِي الْمَسَاءِ: اللَّهُمَّ مَا أَمْسَى بِي...)", "Count": 1, "Reference": "كتاب «أذكار: أذكار يحتاجها كل مسلم» — جمع وإعداد: مروان الذرحاني"}, {"Text": "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِينِي وَدُنْيَايَ وَأَهْلِي وَمَالِي، اللَّهُمَّ اسْتُرْ عَوْرَاتِي وَآمِنْ رَوْعَاتِي، اللَّهُمَّ احْفَظْنِي مِنْ بَيْنِ يَدَيَّ وَمِنْ خَلْفِي وَعَنْ يَمِينِي وَعَنْ شِمَالِي وَمِنْ فَوْقِي، وَأَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِي", "Count": 1, "Reference": "كتاب «أذكار: أذكار يحتاجها كل مسلم» — جمع وإعداد: مروان الذرحاني"}, {"Text": "اللَّهُمَّ فَاطِرَ السَّمَوَاتِ وَالْأَرْضِ، عَالِمَ الْغَيْبِ وَالشَّهَادَةِ، رَبَّ كُلِّ شَيْءٍ وَمَلِيكَهُ، أَشْهَدُ أَلَّا إِلَهَ إِلَّا أَنْتَ، أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي وَمِنْ شَرِّ الشَّيْطَانِ وَشِرْكِهِ، وَأَنْ أَقْتَرِفَ عَلَى نَفْسِي سُوءًا أَوْ أَجُرَّهُ إِلَى مُسْلِمٍ", "Count": 1, "Reference": "كتاب «أذكار: أذكار يحتاجها كل مسلم» — جمع وإعداد: مروان الذرحاني"}, {"Text": "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ، أَصْلِحْ لِي شَأْنِي كُلَّهُ، وَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ", "Count": 1, "Reference": "كتاب «أذكار: أذكار يحتاجها كل مسلم» — جمع وإعداد: مروان الذرحاني"}, {"Text": "أَصْبَحْنَا عَلَى فِطْرَةِ الْإِسْلَامِ، وَعَلَى كَلِمَةِ الْإِخْلَاصِ، وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ، وَعَلَى مِلَّةِ أَبِينَا إِبْرَاهِيمَ حَنِيفًا مُسْلِمًا وَمَا كَانَ مِنَ الْمُشْرِكِينَ", "Count": 1, "Reference": "كتاب «أذكار: أذكار يحتاجها كل مسلم» — جمع وإعداد: مروان الذرحاني"}, {"Text": "قِرَاءَةُ آيَةِ الْكُرْسِيِّ وَالْمُعَوِّذَاتِ", "Count": 1, "Reference": "كتاب «أذكار: أذكار يحتاجها كل مسلم» — جمع وإعداد: مروان الذرحاني"}, {"Text": "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ (مَسَاءً)", "Count": 1, "Reference": "كتاب «أذكار: أذكار يحتاجها كل مسلم» — جمع وإعداد: مروان الذرحاني"}, {"Text": "رَضِيتُ بِاللَّهِ رَبًّا، وَبِالْإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ نَبِيًّا وَرَسُولًا", "Count": 1, "Reference": "كتاب «أذكار: أذكار يحتاجها كل مسلم» — جمع وإعداد: مروان الذرحاني"}, {"Text": "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ", "Count": 1, "Reference": "كتاب «أذكار: أذكار يحتاجها كل مسلم» — جمع وإعداد: مروان الذرحاني"}, {"Text": "اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لَا إِلَهَ إِلَّا أَنْتَ، اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكُفْرِ وَالْفَقْرِ، وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، لَا إِلَهَ إِلَّا أَنْتَ", "Count": 1, "Reference": "كتاب «أذكار: أذكار يحتاجها كل مسلم» — جمع وإعداد: مروان الذرحاني"}, {"Text": "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ عَدَدَ خَلْقِهِ، وَرِضَا نَفْسِهِ، وَزِنَةَ عَرْشِهِ، وَمِدَادَ كَلِمَاتِهِ (صَبَاحًا)", "Count": 1, "Reference": "كتاب «أذكار: أذكار يحتاجها كل مسلم» — جمع وإعداد: مروان الذرحاني"}, {"Text": "اللَّهُمَّ إِنِّي أَصْبَحْتُ أُشْهِدُكَ وَأُشْهِدُ حَمَلَةَ عَرْشِكَ وَمَلَائِكَتَكَ وَجَمِيعَ خَلْقِكَ أَنَّكَ أَنْتَ اللَّهُ لَا إِلَهَ إِلَّا أَنْتَ وَحْدَكَ لَا شَرِيكَ لَكَ، وَأَنَّ مُحَمَّدًا عَبْدُكَ وَرَسُولُكَ (وَفِي الْمَسَاءِ: اللَّهُمَّ إِنِّي أَمْسَيْتُ...)", "Count": 4, "Reference": "كتاب «أذكار: أذكار يحتاجها كل مسلم» — جمع وإعداد: مروان الذرحاني"}, {"Text": "حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ، عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ", "Count": 7, "Reference": "كتاب «أذكار: أذكار يحتاجها كل مسلم» — جمع وإعداد: مروان الذرحاني"}, {"Text": "اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ", "Count": 10, "Reference": "كتاب «أذكار: أذكار يحتاجها كل مسلم» — جمع وإعداد: مروان الذرحاني"}, {"Text": "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ", "Count": 100, "Reference": "كتاب «أذكار: أذكار يحتاجها كل مسلم» — جمع وإعداد: مروان الذرحاني"}, {"Text": "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ (فِي الْيَوْمِ)", "Count": 100, "Reference": "كتاب «أذكار: أذكار يحتاجها كل مسلم» — جمع وإعداد: مروان الذرحاني"}, {"Text": "أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ وَأَتُوبُ إِلَيْهِ (فِي الْيَوْمِ)", "Count": 100, "Reference": "كتاب «أذكار: أذكار يحتاجها كل مسلم» — جمع وإعداد: مروان الذرحاني"}]}, "أَذْكَارٌ قَبْلَ النَّوْمِ": {"Audio": "", "Adhkar": [{"Text": "اللَّهُمَّ إِنِّي أَسْلَمْتُ نَفْسِي إِلَيْكَ، وَوَجَّهْتُ وَجْهِي إِلَيْكَ، وَفَوَّضْتُ أَمْرِي إِلَيْكَ، وَأَلْجَأْتُ ظَهْرِي إِلَيْكَ رَغْبَةً وَرَهْبَةً إِلَيْكَ، لَا مَلْجَأَ وَلَا مَنْجَا مِنْكَ إِلَّا إِلَيْكَ، آمَنْتُ بِكِتَابِكَ الَّذِي أَنْزَلْتَ، وَنَبِيِّكَ الَّذِي أَرْسَلْتَ", "Count": 1, "Reference": "كتاب «أذكار: أذكار يحتاجها كل مسلم» — جمع وإعداد: مروان الذرحاني"}, {"Text": "قِرَاءَةُ آيَةِ الْكُرْسِيِّ", "Count": 1, "Reference": "كتاب «أذكار: أذكار يحتاجها كل مسلم» — جمع وإعداد: مروان الذرحاني"}, {"Text": "قِرَاءَةُ سُورَةِ الْإِخْلَاصِ وَالْمُعَوِّذَتَيْنِ", "Count": 3, "Reference": "كتاب «أذكار: أذكار يحتاجها كل مسلم» — جمع وإعداد: مروان الذرحاني"}, {"Text": "قِرَاءَةُ سُورَةِ الْكَافِرُونَ", "Count": 1, "Reference": "كتاب «أذكار: أذكار يحتاجها كل مسلم» — جمع وإعداد: مروان الذرحاني"}]}, "أَذْكَارُ الِاسْتِيقَاظِ مِنَ النَّوْمِ": {"Audio": "", "Adhkar": [{"Text": "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَمَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ", "Count": 1, "Reference": "كتاب «أذكار: أذكار يحتاجها كل مسلم» — جمع وإعداد: مروان الذرحاني"}, {"Text": "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَلَا إِلَهَ إِلَّا اللَّهُ وَاللَّهُ أَكْبَرُ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ، رَبِّ اغْفِرْ لِي", "Count": 1, "Reference": "كتاب «أذكار: أذكار يحتاجها كل مسلم» — جمع وإعداد: مروان الذرحاني"}]}, "مَا يُقَالُ قَبْلَ الْوُضُوءِ": {"Audio": "", "Adhkar": [{"Text": "بِسْمِ اللَّهِ", "Count": 1, "Reference": "كتاب «أذكار: أذكار يحتاجها كل مسلم» — جمع وإعداد: مروان الذرحاني"}]}, "مَا يُقَالُ بَعْدَ الْوُضُوءِ": {"Audio": "", "Adhkar": [{"Text": "أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ، اللَّهُمَّ اجْعَلْنِي مِنَ التَّوَّابِينَ وَاجْعَلْنِي مِنَ الْمُتَطَهِّرِينَ", "Count": 1, "Reference": "كتاب «أذكار: أذكار يحتاجها كل مسلم» — جمع وإعداد: مروان الذرحاني"}]}, "مَا يُقَالُ عِنْدَ دُخُولِ الْخَلَاءِ": {"Audio": "", "Adhkar": [{"Text": "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبْثِ وَالْخَبَائِثِ", "Count": 1, "Reference": "كتاب «أذكار: أذكار يحتاجها كل مسلم» — جمع وإعداد: مروان الذرحاني"}]}, "مَا يُقَالُ عِنْدَ الْخُرُوجِ مِنَ الْخَلَاءِ": {"Audio": "", "Adhkar": [{"Text": "غُفْرَانَكَ", "Count": 1, "Reference": "كتاب «أذكار: أذكار يحتاجها كل مسلم» — جمع وإعداد: مروان الذرحاني"}]}, "مَا يُقَالُ عِنْدَ الْخُرُوجِ مِنَ الْمَنْزِلِ": {"Audio": "", "Adhkar": [{"Text": "بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ، لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ", "Count": 1, "Reference": "كتاب «أذكار: أذكار يحتاجها كل مسلم» — جمع وإعداد: مروان الذرحاني"}]}, "مَا يُقَالُ عِنْدَ الدُّخُولِ إِلَى الْمَنْزِلِ": {"Audio": "", "Adhkar": [{"Text": "اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ الْمَوْلَجِ وَخَيْرَ الْمَخْرَجِ، بِسْمِ اللَّهِ وَلَجْنَا، وَبِسْمِ اللَّهِ خَرَجْنَا، وَعَلَى رَبِّنَا تَوَكَّلْنَا", "Count": 1, "Reference": "كتاب «أذكار: أذكار يحتاجها كل مسلم» — جمع وإعداد: مروان الذرحاني"}]}};

  const DEFAULT_PHRASES = [
    { id:'subhanallah', label:'سبحان الله', display:'سُبْحَانَ اللّٰه' },
    { id:'alhamdulillah', label:'الحمد لله', display:'الْحَمْدُ لِلّٰه' },
    { id:'allahuakbar', label:'الله أكبر', display:'اللّٰهُ أَكْبَر' },
    { id:'lailaha', label:'لا إله إلا الله', display:'لَا إِلَٰهَ إِلَّا اللّٰه' },
    { id:'astaghfirullah', label:'أستغفر الله', display:'أَسْتَغْفِرُ اللّٰه' },
    { id:'salawat', label:'الصلاة على النبي', display:'اللّٰهُمَّ صَلِّ عَلَى مُحَمَّد' },
  ];
  let PHRASES = DEFAULT_PHRASES.slice();
  const TARGETS = [1, 3, 5, 10, 33, 99, 100, 1000];
  const INTERVALS = [1, 2, 3, 5];
  const MAX_RING_BEADS = 150;
  let BEADS = 33;
  const STORAGE_PREFIX = 'misbaha:phrase:';
  const TARGET_KEY = 'misbaha:target';
  const ACTIVE_KEY = 'misbaha:activePhrase';
  const PHRASES_KEY = 'misbaha:phrases';
  const THEME_KEY = 'misbaha:theme';
  const CHIPS_VISIBLE_KEY = 'misbaha:chipsVisible';
  const AUTO_INTERVAL_KEY = 'misbaha:autoInterval';
  const SOUND_KEY = 'misbaha:soundEnabled';

  let activePhraseId = PHRASES[0].id;
  let target = 33;
  let state = {}; // { [phraseId]: { session, allTime } }
  let autoInterval = 2;
  let autoTimer = null;
  let sequenceActive = false;
  let sequenceQueue = [];
  let sequenceIndex = 0;
  let soundEnabled = true;

  const chipsEl = document.getElementById('chips');
  const targetRowEl = document.getElementById('targetRow');
  const toggleChipsBtn = document.getElementById('toggleChipsBtn');
  const autoPanel = document.getElementById('autoPanel');
  const autoPlayBtn = document.getElementById('autoPlayBtn');
  const autoPlayIcon = document.getElementById('autoPlayIcon');
  const autoLabel = document.getElementById('autoLabel');
  const intervalChipsEl = document.getElementById('intervalChips');
  const currentPhraseEl = document.getElementById('currentPhrase');
  const countNumberEl = document.getElementById('countNumber');
  const countLabelEl = document.getElementById('countLabel');
  const progressFillEl = document.getElementById('progressFill');
  const progressTextEl = document.getElementById('progressText');
  const progressPercentEl = document.getElementById('progressPercent');
  const statRoundEl = document.getElementById('statRound');
  const statSessionEl = document.getElementById('statSession');
  const statTotalEl = document.getElementById('statTotal');
  const ringWrap = document.getElementById('ringWrap');
  const centerBtn = document.getElementById('centerBtn');
  const ringSvg = document.getElementById('ringSvg');

  // ---- storage helpers ----
  // Uses real localStorage so data persists when this file is saved and
  // opened directly in a browser (outside the Claude artifact preview,
  // window.storage is not available there).
  const memoryFallback = {};
  let storageOK = true;
  try{
    const testKey = '__misbaha_test__';
    localStorage.setItem(testKey, '1');
    localStorage.removeItem(testKey);
  }catch(e){ storageOK = false; }

  async function storageGet(key){
    try{
      if(storageOK){
        const v = localStorage.getItem(key);
        return v === null ? null : v;
      }
      return Object.prototype.hasOwnProperty.call(memoryFallback, key) ? memoryFallback[key] : null;
    }catch(e){ return null; }
  }
  async function storageSet(key, value){
    try{
      if(storageOK){
        localStorage.setItem(key, value);
      } else {
        memoryFallback[key] = value;
      }
    }catch(e){ memoryFallback[key] = value; }
  }

  async function loadPhraseState(id){
    const raw = await storageGet(STORAGE_PREFIX + id);
    if(raw){
      try{ return JSON.parse(raw); }catch(e){ /* fallthrough */ }
    }
    return { session:0, allTime:0 };
  }
  async function savePhraseState(id){
    await storageSet(STORAGE_PREFIX + id, JSON.stringify(state[id]));
  }

  // ---- build bead ring ----
  function calcBeadCount(t){
    return Math.min(t, MAX_RING_BEADS);
  }

  function calcRingRadius(n){
    if(n <= 40) return 128;
    if(n <= 70) return 131;
    if(n <= 110) return 134;
    return 137;
  }

  function calcBeadRadius(n, r){
    const arc = (2 * Math.PI * r) / n;
    return Math.max(1.7, Math.min(5.5, arc * 0.32));
  }

  function buildRing(){
    ringSvg.innerHTML = '';

    const defs = document.createElementNS('http://www.w3.org/2000/svg','defs');
    defs.innerHTML = `<radialGradient id="goldGrad" cx="50%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#f2d78c"/>
      <stop offset="100%" stop-color="#d4af37"/>
    </radialGradient>`;
    ringSvg.appendChild(defs);

    const cx = 140, cy = 140;
    const r = calcRingRadius(BEADS);
    const baseR = calcBeadRadius(BEADS, r);
    const markerEvery = Math.max(1, Math.round(BEADS / 3));

    for(let i=0;i<BEADS;i++){
      const angle = (i / BEADS) * Math.PI * 2 - Math.PI/2;
      const x = cx + r * Math.cos(angle);
      const y = cy + r * Math.sin(angle);
      const isMarker = (i+1) % markerEvery === 0;
      const circle = document.createElementNS('http://www.w3.org/2000/svg','circle');
      circle.setAttribute('cx', x);
      circle.setAttribute('cy', y);
      circle.setAttribute('r', isMarker ? Math.min(8, baseR + 2) : baseR);
      circle.setAttribute('class','bead');
      circle.setAttribute('fill', beadEmptyColor());
      circle.setAttribute('data-index', i);
      ringSvg.appendChild(circle);
    }
  }

  function rebuildRingForTarget(){
    BEADS = calcBeadCount(target);
    buildRing();
  }

  function beadEmptyColor(){
    return document.documentElement.classList.contains('light')
      ? 'rgba(43,36,32,0.14)'
      : 'rgba(244,236,218,0.14)';
  }

  function updateBeads(sessionCount){
    const filled = sessionCount % BEADS === 0 && sessionCount > 0 ? BEADS : sessionCount % BEADS;
    const beads = ringSvg.querySelectorAll('.bead');
    beads.forEach((b, i) => {
      if(i < filled){
        b.setAttribute('fill', 'url(#goldGrad)');
        b.style.filter = 'drop-shadow(0 0 4px rgba(212,175,55,0.8))';
      } else {
        b.setAttribute('fill', beadEmptyColor());
        b.style.filter = 'none';
      }
    });
  }

  // ---- render UI ----
  function renderChips(){
    chipsEl.innerHTML = '';
    PHRASES.forEach(p => {
      const chip = document.createElement('div');
      chip.className = 'chip' + (p.id === activePhraseId ? ' active' : '');
      chip.textContent = p.label;
      chip.addEventListener('click', () => switchPhrase(p.id));
      chipsEl.appendChild(chip);
    });
  }

  function renderTargets(){
    targetRowEl.innerHTML = '';
    TARGETS.forEach(t => {
      const el = document.createElement('div');
      el.className = 'target-chip' + (t === target ? ' active' : '');
      el.textContent = t;
      el.addEventListener('click', () => {
        target = t;
        storageSet(TARGET_KEY, String(target));
        renderTargets();
        rebuildRingForTarget();
        renderCounts();
      });
      targetRowEl.appendChild(el);
    });
  }

  function renderIntervalChips(){
    intervalChipsEl.innerHTML = '';
    INTERVALS.forEach(sec => {
      const el = document.createElement('div');
      el.className = 'interval-chip' + (sec === autoInterval ? ' active' : '');
      el.textContent = sec + (sec === 1 ? ' ثانية' : ' ثواني');
      el.addEventListener('click', () => {
        autoInterval = sec;
        storageSet(AUTO_INTERVAL_KEY, String(sec));
        renderIntervalChips();
        if(autoTimer){ stopAuto(); startAuto(); }
      });
      intervalChipsEl.appendChild(el);
    });
  }

  function renderCounts(){
    const s = state[activePhraseId] || { session:0, allTime:0 };
    countNumberEl.textContent = s.session;
    countLabelEl.textContent = 'اضغط للعدّ';
    statSessionEl.textContent = s.session;
    statTotalEl.textContent = s.allTime;
    const round = Math.floor(s.session / BEADS) + 1;
    statRoundEl.textContent = round;

    const pct = Math.min(100, Math.round((s.session % target === 0 && s.session > 0 ? target : s.session % target) / target * 100));
    const displayInTarget = s.session % target === 0 && s.session > 0 ? target : s.session % target;
    progressFillEl.style.width = pct + '%';
    progressTextEl.textContent = displayInTarget + ' / ' + target;
    progressPercentEl.textContent = pct + '٪';

    updateBeads(s.session);
  }

  function switchPhrase(id, opts){
    opts = opts || {};
    if(sequenceActive && !opts.fromSequence && id !== sequenceQueue[sequenceIndex]){
      cancelSequence('تم إلغاء المسار لأنك بدّلت الذكر يدويًا');
    }
    activePhraseId = id;
    storageSet(ACTIVE_KEY, id);
    const p = PHRASES.find(p => p.id === id);
    currentPhraseEl.textContent = p.display;
    renderChips();
    renderCounts();
  }

  function vibrate(pattern){
    try{ if(navigator.vibrate) navigator.vibrate(pattern); }catch(e){}
  }

  // ---- click sound (generated tone, no external audio files needed) ----
  let audioCtx = null;
  function ensureAudioCtx(){
    if(!audioCtx){
      try{ audioCtx = new (window.AudioContext || window.webkitAudioContext)(); }
      catch(e){ audioCtx = null; }
    }
    if(audioCtx && audioCtx.state === 'suspended'){
      audioCtx.resume().catch(() => {});
    }
    return audioCtx;
  }

  function playClickSound(){
    if(!soundEnabled) return;
    const ctx = ensureAudioCtx();
    if(!ctx) return;
    try{
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(920, now);
      osc.frequency.exponentialRampToValueAtTime(500, now + 0.05);
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(0.24, now + 0.008);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.09);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.1);
    }catch(e){ /* ignore */ }
  }

  async function increment(){
    const s = state[activePhraseId];
    s.session += 1;
    s.allTime += 1;

    vibrate(10);
    playClickSound();
    if(s.session % BEADS === 0){
      centerBtn.classList.remove('pulse');
      void centerBtn.offsetWidth;
      centerBtn.classList.add('pulse');
      vibrate([15,40,15]);
    }
    if(s.session % target === 0){
      vibrate([20,60,20,60,20]);
      if(sequenceActive){
        handleSequenceStepComplete();
      }
    }

    renderCounts();
    await savePhraseState(activePhraseId);
  }

  async function undo(){
    const s = state[activePhraseId];
    if(s.session > 0) s.session -= 1;
    if(s.allTime > 0) s.allTime -= 1;
    renderCounts();
    await savePhraseState(activePhraseId);
  }

  async function resetSession(){
    const s = state[activePhraseId];
    s.session = 0;
    renderCounts();
    await savePhraseState(activePhraseId);
  }

  // ---- theme toggle ----
  const themeToggle = document.getElementById('themeToggle');
  const sunIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>';
  const moonIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"/></svg>';

  function applyTheme(isLight){
    document.documentElement.classList.toggle('light', isLight);
    themeToggle.innerHTML = isLight ? moonIcon : sunIcon;
    ringSvg.querySelectorAll('.bead').forEach(b => {
      if(b.getAttribute('fill') !== 'url(#goldGrad)'){
        b.setAttribute('fill', beadEmptyColor());
      }
    });
  }

  themeToggle.addEventListener('click', () => {
    const isLight = !document.documentElement.classList.contains('light');
    applyTheme(isLight);
    storageSet(THEME_KEY, isLight ? 'light' : 'dark');
  });

  // ---- sound mute toggle ----
  const soundToggle = document.getElementById('soundToggle');
  const soundOnIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H2v6h4l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M19 5a9 9 0 0 1 0 14"/></svg>';
  const soundOffIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H2v6h4l5 4z"/><path d="m23 9-6 6"/><path d="m17 9 6 6"/></svg>';

  function applySoundIcon(){ soundToggle.innerHTML = soundEnabled ? soundOnIcon : soundOffIcon; }

  soundToggle.addEventListener('click', () => {
    soundEnabled = !soundEnabled;
    applySoundIcon();
    storageSet(SOUND_KEY, soundEnabled ? '1' : '0');
    if(soundEnabled) playClickSound();
  });

  // ---- side drawer (stats + manage entry point) ----
  const drawerOverlay = document.getElementById('drawerOverlay');
  const menuBtn = document.getElementById('menuBtn');
  const closeDrawer = document.getElementById('closeDrawer');

  function openDrawer(){ drawerOverlay.classList.add('open'); }
  function closeDrawerFn(){ drawerOverlay.classList.remove('open'); }
  menuBtn.addEventListener('click', openDrawer);
  closeDrawer.addEventListener('click', closeDrawerFn);
  drawerOverlay.addEventListener('click', (e) => { if(e.target === drawerOverlay) closeDrawerFn(); });

  // ---- adhkar library screens (categories -> category detail) ----
  const homeScreen = document.getElementById('homeScreen');
  const categoriesScreen = document.getElementById('categoriesScreen');
  const categoryDetailScreen = document.getElementById('categoryDetailScreen');
  const adhkarNavBtn = document.getElementById('adhkarNavBtn');
  const categoriesBackBtn = document.getElementById('categoriesBackBtn');
  const detailBackBtn = document.getElementById('detailBackBtn');
  const categorySearch = document.getElementById('categorySearch');
  const categoryListEl = document.getElementById('categoryList');
  const detailListEl = document.getElementById('detailList');
  const detailTitleEl = document.getElementById('detailTitle');

  function showAppScreen(name){
    [homeScreen, categoriesScreen, categoryDetailScreen].forEach(s => s.classList.add('hidden'));
    if(name === 'categories') categoriesScreen.classList.remove('hidden');
    else if(name === 'detail') categoryDetailScreen.classList.remove('hidden');
    else homeScreen.classList.remove('hidden');
  }

  // normalize Arabic text for flexible search: strips tashkeel/diacritics,
  // unifies alef/ya/ta-marbuta variants and tatweel, ignores punctuation & extra spaces
  function normalizeArabic(text){
    return (text || '')
      .replace(/[\u064B-\u0652\u0670\u06D6-\u06ED\u08D4-\u08E1\u08E3-\u08FF]/g, '') // tashkeel/diacritics
      .replace(/\u0640/g, '') // tatweel
      .replace(/[إأآٱ]/g, 'ا')
      .replace(/ى/g, 'ي')
      .replace(/ة/g, 'ه')
      .replace(/ؤ/g, 'و')
      .replace(/ئ/g, 'ي')
      .replace(/[^\u0600-\u06FF0-9a-zA-Z\s]/g, ' ') // strip punctuation/brackets/asterisks
      .replace(/\s+/g, ' ')
      .trim()
      .toLowerCase();
  }

  function renderCategoryList(filter){
    filter = normalizeArabic(filter || '');
    categoryListEl.innerHTML = '';
    const names = Object.keys(ADHKAR_DATA).filter(name => {
      if(!filter) return true;
      if(normalizeArabic(name).includes(filter)) return true;
      return ADHKAR_DATA[name].Adhkar.some(item =>
        normalizeArabic(item.Text).includes(filter) || normalizeArabic(item.Reference).includes(filter)
      );
    });
    if(names.length === 0){
      const empty = document.createElement('div');
      empty.className = 'no-results';
      empty.textContent = 'لا توجد نتائج مطابقة';
      categoryListEl.appendChild(empty);
      return;
    }
    names.forEach(name => {
      const card = document.createElement('div');
      card.className = 'category-card';
      card.innerHTML =
        '<span class="cat-name"></span>' +
        '<span class="cat-count">' + ADHKAR_DATA[name].Adhkar.length + '</span>' +
        '<svg class="cat-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>';
      card.querySelector('.cat-name').textContent = name;
      card.addEventListener('click', () => openCategoryDetail(name));
      categoryListEl.appendChild(card);
    });
  }

  function openCategoryDetail(name){
    detailTitleEl.textContent = name;
    detailListEl.innerHTML = '';
    const items = (ADHKAR_DATA[name] || { Adhkar: [] }).Adhkar;
    items.forEach(item => {
      const card = document.createElement('div');
      card.className = 'adhkar-card';

      const textEl = document.createElement('div');
      textEl.className = 'adhkar-text';
      textEl.textContent = item.Text;
      card.appendChild(textEl);

      const meta = document.createElement('div');
      meta.className = 'adhkar-meta';
      const refEl = document.createElement('span');
      refEl.className = 'adhkar-reference';
      refEl.textContent = item.Reference || '';
      meta.appendChild(refEl);
      if(item.Count && item.Count > 1){
        const badge = document.createElement('span');
        badge.className = 'adhkar-count-badge';
        badge.textContent = '× ' + item.Count;
        meta.appendChild(badge);
      }
      card.appendChild(meta);

      const useBtn = document.createElement('button');
      useBtn.className = 'adhkar-use-btn';
      useBtn.textContent = 'استخدمه في العدّاد ⊕';
      useBtn.addEventListener('click', () => addAdhkarToCounter(item));
      card.appendChild(useBtn);

      detailListEl.appendChild(card);
    });
    showAppScreen('detail');
  }

  async function addAdhkarToCounter(item){
    let existing = PHRASES.find(p => p.display === item.Text);
    let id;
    if(existing){
      id = existing.id;
    } else {
      id = slugify(item.Text);
      const shortLabel = item.Text.length > 34 ? item.Text.slice(0, 34) + '…' : item.Text;
      const newPhrase = { id, label: shortLabel, display: item.Text };
      PHRASES.push(newPhrase);
      state[id] = { session: 0, allTime: 0 };
      await savePhrasesList();
    }
    if(item.Count && item.Count > 0 && item.Count !== target){
      target = item.Count;
      await storageSet(TARGET_KEY, String(target));
      renderTargets();
      rebuildRingForTarget();
    }
    switchPhrase(id);
    renderChips();
    showAppScreen('home');
    showToast('✅ تمت الإضافة — جاهز للتسبيح');
  }

  function openAdhkarLibrary(){
    categorySearch.value = '';
    renderCategoryList('');
    showAppScreen('categories');
  }

  adhkarNavBtn.addEventListener('click', openAdhkarLibrary);
  document.getElementById('adhkarDrawerBtn').addEventListener('click', () => {
    closeDrawerFn();
    openAdhkarLibrary();
  });
  categoriesBackBtn.addEventListener('click', () => showAppScreen('home'));
  detailBackBtn.addEventListener('click', () => showAppScreen('categories'));
  categorySearch.addEventListener('input', () => renderCategoryList(categorySearch.value));

  // ---- manage phrases modal ----
  const modalOverlay = document.getElementById('modalOverlay');
  const manageBtn = document.getElementById('manageBtn');
  const closeModal = document.getElementById('closeModal');
  const phraseListEl = document.getElementById('phraseList');
  const newPhraseInput = document.getElementById('newPhraseInput');
  const addPhraseBtn = document.getElementById('addPhraseBtn');

  function openModal(){
    renderPhraseList();
    modalOverlay.classList.add('open');
  }
  function closeModalFn(){
    modalOverlay.classList.remove('open');
  }
  manageBtn.addEventListener('click', () => {
    closeDrawerFn();
    openModal();
  });
  closeModal.addEventListener('click', closeModalFn);
  modalOverlay.addEventListener('click', (e) => { if(e.target === modalOverlay) closeModalFn(); });

  // ---- toast ----
  const toastEl = document.getElementById('toast');
  let toastTimer = null;
  function showToast(text, ms){
    toastEl.textContent = text;
    toastEl.classList.add('show');
    if(toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { toastEl.classList.remove('show'); }, ms || 2600);
  }

  // ---- sequence (auto-advancing multi-dhikr session) ----
  const sequenceBanner = document.getElementById('sequenceBanner');
  const sequenceProgressEl = document.getElementById('sequenceProgress');
  const sequenceStopBtn = document.getElementById('sequenceStopBtn');
  const startSequenceBtn = document.getElementById('startSequenceBtn');
  const sequenceModalOverlay = document.getElementById('sequenceModalOverlay');
  const closeSequenceModal = document.getElementById('closeSequenceModal');
  const sequenceCheckList = document.getElementById('sequenceCheckList');
  const beginSequenceBtn = document.getElementById('beginSequenceBtn');

  function renderSequenceCheckList(){
    sequenceCheckList.innerHTML = '';
    PHRASES.forEach(p => {
      const row = document.createElement('label');
      row.className = 'seq-check-row';
      const cb = document.createElement('input');
      cb.type = 'checkbox';
      cb.checked = true;
      cb.dataset.id = p.id;
      const span = document.createElement('span');
      span.textContent = p.label;
      row.appendChild(cb);
      row.appendChild(span);
      sequenceCheckList.appendChild(row);
    });
  }

  function openSequenceModal(){
    renderSequenceCheckList();
    sequenceModalOverlay.classList.add('open');
  }
  function closeSequenceModalFn(){
    sequenceModalOverlay.classList.remove('open');
  }
  startSequenceBtn.addEventListener('click', () => {
    closeDrawerFn();
    openSequenceModal();
  });
  closeSequenceModal.addEventListener('click', closeSequenceModalFn);
  sequenceModalOverlay.addEventListener('click', (e) => { if(e.target === sequenceModalOverlay) closeSequenceModalFn(); });

  function updateSequenceBanner(){
    if(!sequenceActive){
      sequenceBanner.classList.remove('visible');
      return;
    }
    sequenceBanner.classList.add('visible');
    const p = PHRASES.find(p => p.id === sequenceQueue[sequenceIndex]);
    sequenceProgressEl.textContent = (sequenceIndex + 1) + ' / ' + sequenceQueue.length + ' — ' + (p ? p.label : '');
  }

  function cancelSequence(message){
    sequenceActive = false;
    sequenceQueue = [];
    sequenceIndex = 0;
    updateSequenceBanner();
    if(message) showToast(message);
  }

  sequenceStopBtn.addEventListener('click', () => cancelSequence('تم إنهاء المسار'));

  beginSequenceBtn.addEventListener('click', () => {
    const checked = Array.from(sequenceCheckList.querySelectorAll('input[type="checkbox"]:checked'))
      .map(cb => cb.dataset.id);
    if(checked.length === 0){
      showToast('اختر ذكرًا واحدًا على الأقل');
      return;
    }
    sequenceQueue = checked;
    sequenceIndex = 0;
    sequenceActive = true;
    const firstId = sequenceQueue[0];
    if(state[firstId]) state[firstId].session = 0;
    switchPhrase(firstId, { fromSequence:true });
    updateSequenceBanner();
    closeSequenceModalFn();
    showToast('🌙 بدأ المسار — الهدف الحالي ' + target + ' لكل ذكر');
  });

  function handleSequenceStepComplete(){
    const finished = PHRASES.find(p => p.id === activePhraseId);
    sequenceIndex += 1;
    if(sequenceIndex < sequenceQueue.length){
      const nextId = sequenceQueue[sequenceIndex];
      if(state[nextId]) state[nextId].session = 0;
      switchPhrase(nextId, { fromSequence:true });
      updateSequenceBanner();
      showToast('✅ ' + (finished ? finished.label : '') + '  —  التالي: ' + (PHRASES.find(p => p.id === nextId) || {}).label);
      vibrate([15,50,15]);
    } else {
      sequenceActive = false;
      updateSequenceBanner();
      showToast('🎉 أكملت المسار بالكامل، تقبّل الله منك', 3600);
      vibrate([20,60,20,60,20,60,20]);
    }
  }

  async function savePhrasesList(){
    await storageSet(PHRASES_KEY, JSON.stringify(PHRASES.map(p => ({ id:p.id, label:p.label, display:p.display }))));
  }

  function slugify(text){
    return 'p_' + Date.now().toString(36) + Math.random().toString(36).slice(2,6);
  }

  function renderPhraseList(){
    phraseListEl.innerHTML = '';
    PHRASES.forEach(p => {
      const row = document.createElement('div');
      row.className = 'phrase-row';

      const input = document.createElement('input');
      input.type = 'text';
      input.value = p.label;

      const saveBtn = document.createElement('button');
      saveBtn.className = 'row-btn save';
      saveBtn.title = 'حفظ التعديل';
      saveBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>';
      saveBtn.addEventListener('click', async () => {
        const val = input.value.trim();
        if(!val) return;
        p.label = val;
        p.display = val;
        if(p.id === activePhraseId) currentPhraseEl.textContent = p.display;
        await savePhrasesList();
        renderChips();
      });

      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'row-btn delete';
      deleteBtn.title = 'حذف الذكر';
      deleteBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/></svg>';
      deleteBtn.addEventListener('click', async () => {
        if(PHRASES.length <= 1) return;
        PHRASES = PHRASES.filter(x => x.id !== p.id);
        delete state[p.id];
        if(sequenceActive && sequenceQueue.includes(p.id)){
          cancelSequence('تم إلغاء المسار لأنه تم حذف أحد أذكاره');
        }
        if(activePhraseId === p.id){
          activePhraseId = PHRASES[0].id;
          storageSet(ACTIVE_KEY, activePhraseId);
          currentPhraseEl.textContent = PHRASES[0].display;
        }
        await savePhrasesList();
        renderChips();
        renderCounts();
        renderPhraseList();
      });

      row.appendChild(input);
      row.appendChild(saveBtn);
      row.appendChild(deleteBtn);
      phraseListEl.appendChild(row);
    });
  }

  async function addPhrase(){
    const val = newPhraseInput.value.trim();
    if(!val) return;
    const id = slugify(val);
    const p = { id, label: val, display: val };
    PHRASES.push(p);
    state[id] = { session:0, allTime:0 };
    newPhraseInput.value = '';
    await savePhrasesList();
    renderChips();
    renderPhraseList();
  }
  addPhraseBtn.addEventListener('click', addPhrase);
  newPhraseInput.addEventListener('keydown', (e) => { if(e.key === 'Enter') addPhrase(); });

  ringWrap.addEventListener('click', increment);
  ringWrap.addEventListener('keydown', (e) => {
    if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); increment(); }
  });
  ringWrap.tabIndex = 0;
  ringWrap.setAttribute('role','button');
  ringWrap.setAttribute('aria-label','اضغط للعدّ');

  document.getElementById('resetBtn').addEventListener('click', resetSession);
  document.getElementById('undoBtn').addEventListener('click', undo);

  // ---- collapsible dhikr chips ----
  function setChipsVisible(visible){
    chipsEl.classList.toggle('collapsed', !visible);
    toggleChipsBtn.classList.toggle('collapsed', !visible);
    storageSet(CHIPS_VISIBLE_KEY, visible ? '1' : '0');
  }
  toggleChipsBtn.addEventListener('click', () => {
    const isCollapsed = chipsEl.classList.contains('collapsed');
    setChipsVisible(isCollapsed);
  });

  // ---- auto-count (tasbih plays itself every N seconds) ----
  const PLAY_ICON = '<path d="M8 5v14l11-7z"/>';
  const PAUSE_ICON = '<path d="M7 5h4v14H7zM13 5h4v14h-4z"/>';

  function startAuto(){
    if(autoTimer) return;
    autoTimer = setInterval(() => { increment(); }, autoInterval * 1000);
    autoPlayBtn.classList.add('playing');
    autoPanel.classList.add('playing');
    autoPlayIcon.innerHTML = PAUSE_ICON;
    autoLabel.textContent = 'يعدّ تلقائيًا الآن…';
  }
  function stopAuto(){
    if(autoTimer){ clearInterval(autoTimer); autoTimer = null; }
    autoPlayBtn.classList.remove('playing');
    autoPanel.classList.remove('playing');
    autoPlayIcon.innerHTML = PLAY_ICON;
    autoLabel.textContent = 'العدّ التلقائي';
  }
  autoPlayBtn.addEventListener('click', () => {
    if(autoTimer) stopAuto(); else startAuto();
  });
  document.addEventListener('visibilitychange', () => {
    if(document.hidden) stopAuto();
  });

  async function init(){
    const savedTheme = await storageGet(THEME_KEY);
    applyTheme(savedTheme === 'light');

    const savedSound = await storageGet(SOUND_KEY);
    soundEnabled = savedSound !== '0';
    applySoundIcon();

    const savedPhrases = await storageGet(PHRASES_KEY);
    if(savedPhrases){
      try{
        const parsed = JSON.parse(savedPhrases);
        if(Array.isArray(parsed) && parsed.length){ PHRASES = parsed; }
      }catch(e){ /* keep defaults */ }
    }

    const savedTarget = await storageGet(TARGET_KEY);
    if(savedTarget && TARGETS.includes(Number(savedTarget))) target = Number(savedTarget);
    rebuildRingForTarget();

    const savedActive = await storageGet(ACTIVE_KEY);
    if(savedActive && PHRASES.some(p => p.id === savedActive)) activePhraseId = savedActive;
    if(!PHRASES.some(p => p.id === activePhraseId)) activePhraseId = PHRASES[0].id;

    for(const p of PHRASES){
      state[p.id] = await loadPhraseState(p.id);
    }

    const p = PHRASES.find(p => p.id === activePhraseId);
    currentPhraseEl.textContent = p.display;

    const savedChipsVisible = await storageGet(CHIPS_VISIBLE_KEY);
    setChipsVisible(savedChipsVisible !== '0');

    const savedAutoInterval = await storageGet(AUTO_INTERVAL_KEY);
    if(savedAutoInterval && INTERVALS.includes(Number(savedAutoInterval))) autoInterval = Number(savedAutoInterval);

    renderChips();
    renderTargets();
    renderIntervalChips();
    renderCounts();
  }

  init();
})();