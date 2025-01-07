Search.setIndex({"docnames": ["chapter1", "intro"], "filenames": ["chapter1.ipynb", "intro.md"], "titles": ["Chapter 1", "Introduction to Automatic Music Transcription: Breaking down Onsets and Frames"], "terms": {"ar": 0, "mid": 0, "level": 0, "audio": 0, "featur": 0, "us": [0, 1], "train": 0, "deep": [0, 1], "learn": [0, 1], "model": [0, 1], "To": 0, "understand": 0, "we": 0, "quickli": 0, "brush": 0, "through": 0, "some": 0, "fundament": 0, "which": 0, "extrem": 0, "necessari": 0, "gener": 0, "speak": 0, "signal": 0, "repres": 0, "quantiti": 0, "so": 0, "essenc": 0, "an": 0, "air": 0, "pressur": 0, "thi": [0, 1], "i": [0, 1], "typic": 0, "continu": 0, "henc": 0, "store": 0, "need": 0, "perform": 0, "sampl": 0, "when": 0, "measur": 0, "read": 0, "valu": 0, "fast": 0, "can": 0, "higher": 0, "rate": 0, "more": 0, "accur": 0, "our": 0, "vari": 0, "common": 0, "44100": 0, "hz": 0, "where": 0, "refer": 0, "per": 0, "second": 0, "onc": 0, "now": 0, "have": [0, 1], "digit": 0, "modifi": 0, "let": 0, "": [0, 1], "look": 0, "exampl": 0, "below": 0, "import": 0, "librari": 0, "librosa": 0, "ipython": 0, "displai": 0, "ipd": 0, "matplotlib": 0, "pyplot": 0, "plt": 0, "numpi": 0, "np": 0, "file": 0, "audio_sign": 0, "sample_r": 0, "load": 0, "happi": 0, "know": 0, "flac": 0, "your": 0, "browser": 0, "doe": 0, "support": 0, "element": 0, "abov": 0, "me": 0, "plai": 0, "popular": 0, "kid": 0, "song": 0, "If": 0, "you": 0, "clap": 0, "hand": 0, "piano": 0, "howev": 0, "sinc": 0, "grew": 0, "up": 0, "church": 0, "sung": 0, "sai": 0, "amen": 0, "amennnnn": 0, "That": 0, "being": 0, "said": 0, "see": 0, "plot": 0, "arang": 0, "len": 0, "titl": 0, "rendit": 0, "xlabel": 0, "ylabel": 0, "amplitud": 0, "how": 0, "do": 0, "manipul": 0, "remov": 0, "high": 0, "low": 0, "frequienc": 0, "chang": 0, "sound": 0, "power": 0, "vector": 0, "But": 0, "explain": 0, "what": 0, "all": 0, "simpli": 0, "tool": 0, "break": 0, "down": 0, "its": 0, "individu": 0, "frequenc": 0, "essenti": 0, "move": 0, "from": 0, "domain": 0, "confus": 0, "well": 0, "fear": 0, "imag": 0, "sourc": 0, "tikz": 0, "logic": 0, "behind": 0, "process": 0, "rememb": 0, "linear": 0, "combin": 0, "basi": 0, "v": 0, "2i": 0, "5j": 0, "j": 0, "begin": 0, "bmatrix": 0, "0": 0, "end": 0, "known": 0, "2": 0, "5": 0, "gotten": 0, "dot": 0, "product": 0, "respect": 0, "ani": 0, "sum_": 0, "langl": 0, "e_": 0, "rangl": 0, "inner": 0, "lastli": 0, "countabl": 0, "set": 0, "number": 0, "tell": 0, "u": 0, "degre": 0, "similar": 0, "close": 0, "For": 0, "absolut": 0, "larger": 0, "than": 0, "mean": 0, "closer": 0, "And": 0, "duh": 0, "diagram": 0, "obviou": 0, "although": 0, "math": 0, "super": 0, "complic": 0, "also": 0, "treat": 0, "find": 0, "out": 0, "sine": 0, "cosin": 0, "under": 0, "certain": 0, "condit": 0, "annoi": 0, "unwieldi": 0, "want": 0, "dig": 0, "deeper": 0, "advis": 0, "check": 0, "meinard": 0, "muller": 0, "book": [0, 1], "music": 0, "get": [0, 1], "readi": 0, "crazi": 0, "stuff": 0, "hilbert": 0, "space": [0, 1], "squar": 0, "summabl": 0, "sequenc": 0, "blah": 0, "By": 0, "wai": 0, "steal": 0, "lot": 0, "concept": 0, "even": 0, "though": 0, "noth": 0, "base": [0, 1], "far": 0, "go": 0, "complex": 0, "plane": 0, "In": 0, "case": 0, "wonder": 0, "why": 0, "alon": 0, "turn": 0, "allow": 0, "simultan": 0, "cover": 0, "give": 0, "neat": 0, "phase": 0, "make": 0, "sinusoid": 0, "A": 0, "basic": 0, "simplest": 0, "period": 0, "waveform": 0, "decompos": 0, "compon": [0, 1], "At": 0, "point": 0, "am": 0, "sure": 0, "rant": 0, "probabl": 0, "could": 0, "figur": 0, "work": 0, "follow": 0, "mention": 0, "version": 0, "express": 0, "hat": 0, "f": 0, "omega": 0, "int_": 0, "t": 0, "mathbb": 0, "r": 0, "exp": 0, "pi": 0, "dt": 0, "exponenti": 0, "thingi": 0, "imagin": 0, "them": 0, "Not": 0, "onli": 0, "integr": 0, "sort": 0, "sum": 0, "equat": 0, "function": 0, "euler": 0, "theorem": 0, "theta": 0, "co": 0, "sin": 0, "It": 0, "form": 0, "captur": 0, "one": 0, "simpl": 0, "dude": 0, "love": 0, "numnber": 0, "approach": 0, "comput": 0, "magnitud": 0, "denot": 0, "result": 0, "should": 0, "right": 0, "d_": 0, "w": 0, "sqrt": 0, "later": 0, "There": 0, "thing": 0, "paramet": 0, "call": 0, "gamma_": 0, "angl": 0, "between": 0, "horizont": 0, "x": 0, "axi": 0, "just": 0, "put": 0, "here": 0, "each": 0, "coeffici": 0, "c_": 0, "frac": 0, "cdot": 0, "varphi_": 0, "problem": 0, "like": 0, "don": 0, "varphi": 0, "ha": 0, "actual": 0, "instead": 0, "energi": 0, "shown": 0, "e": 0, "norm": 0, "done": 0, "becaus": 0, "unit": 0, "root": 0, "compens": 0, "normal": 0, "multipli": 0, "true": 0, "phewwww": 0, "wa": 0, "address": 0, "beauti": 0, "inform": 0, "too": 0, "didn": 0, "would": 0, "hell": 0, "troubl": 0, "gamma": 0, "posit": 0, "frequencei": 0, "woohoooooo": 0, "guid": 0, "depict": 0, "manner": 0, "dw": 0, "deal": 0, "oper": 0, "finit": 0, "amount": 0, "won": 0, "n": 0, "index": 0, "f_": 0, "approxim": 0, "approx": 0, "underset": 0, "z": 0, "nt": 0, "obtain": 0, "assum": 0, "compar": 0, "two": 0, "someth": 0, "correspond": 0, "real": 0, "world": 0, "band": 0, "limit": 0, "contain": 0, "half": 0, "consid": 0, "leq": 0, "accord": 0, "nyquist": 0, "least": 0, "lead": 0, "artifact": 0, "alias": 0, "convert": 0, "back": 0, "listen": 0, "worth": 0, "linearli": 0, "k": 0, "m": 0, "practic": [0, 1], "take": 0, "techniqu": 0, "otherwis": 0, "overset": 0, "ikn": 0, "due": 0, "symmetri": 0, "properti": 0, "part": 0, "yet": 0, "lol": 0, "befor": 0, "round": 0, "off": 0, "formula": 0, "kth": 0, "bin": 0, "talk": 0, "earlier": 0, "clearli": 0, "coeff": 0, "kf_": 0, "told": 0, "resolut": 0, "hertz": 0, "viola": 0, "big": 0, "gui": 0, "show": 0, "issu": 0, "occur": 0, "differ": 0, "slide": 0, "over": 0, "given": 0, "mh": 0, "rather": 0, "doesn": 0, "matter": 0, "same": 0, "frame": 0, "h": 0, "hop": 0, "size": 0, "distanc": 0, "guess": 0, "physic": 0, "spell": 0, "everi": 0, "_": 0, "th": 0, "t_": 0, "saw": 0, "2d": 0, "y": 0, "vertic": 0, "intens": 0, "color": 0, "n_fft": 0, "2048": 0, "spec": 0, "ab": 0, "fig": 0, "ax": 0, "subplot": 0, "img": 0, "specshow": 0, "amplitude_to_db": 0, "ref": 0, "max": 0, "y_axi": 0, "x_axi": 0, "set_titl": 0, "colorbar": 0, "format": 0, "0f": 0, "db": 0, "fact": 0, "logarithm": 0, "pronounc": 0, "help": 0, "simul": 0, "human": 0, "percept": 0, "increas": 0, "better": 0, "worsen": 0, "tradeoff": 0, "hann": 0, "rectangular": 0, "introduc": [0, 1], "spectrum": 0, "discontinu": 0, "edg": 0, "studi": [0, 1], "perceiv": 0, "hear": 0, "lower": 0, "much": 0, "easili": 0, "ones": 0, "800hz": 0, "1000hz": 0, "16khz": 0, "18khz": 0, "thei": 0, "equal": 0, "pitch": 0, "curv": 0, "ahead": 0, "my": 0, "melspectrogram": 0, "sr": 0, "hop_length": 0, "1024": 0, "power_to_db": 0, "previous": 0, "appli": 0, "design": 0, "less": 0, "As": 0, "lineari": 0, "attempt": [0, 1], "solv": 0, "recal": 0, "anoth": 0, "name": 0, "aka": 0, "qualiti": 0, "factor": 0, "reason": 0, "avoid": 0, "rabbit": 0, "hole": 0, "dft": 0, "ealrier": 0, "bandwith": 0, "reduc": 0, "decreas": 0, "smaller": 0, "impli": 0, "coarser": 0, "subject": 0, "were": 0, "never": 0, "standard": 0, "sens": 0, "happen": 0, "becom": 0, "therebi": 0, "entir": 0, "small": [0, 1], "varyyyyi": 0, "previou": 0, "effect": 0, "final": 0, "consist": 0, "pretti": 0, "awesomeee": 0, "start": 0, "defin": 0, "quarter": 0, "tone": 0, "divid": 0, "octav": 0, "24": 0, "min": 0, "next": 0, "other": 0, "029f_": 0, "34": 0, "vice": 0, "versa": 0, "rewrit": 0, "everyth": 0, "learnt": 0, "rid": 0, "word": 0, "iqn": 0, "divis": 0, "ensur": 0, "boom": 0, "theori": 0, "paper": 0, "great": 0, "detail": 0, "bins_per_octav": 0, "cqt_note": 0, "beginn": 1, "field": 1, "The": 1, "jongwook": 1, "kim": 1, "implement": 1, "balanc": 1, "mathemt": 1, "hopefulli": 1, "prove": 1, "anyon": 1, "who": 1, "chapter": 1, "1": 1}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"chapter": 0, "1": 0, "log": 0, "mel": 0, "spectrogram": 0, "fourier": 0, "analysi": 0, "The": 0, "transform": 0, "represent": 0, "discret": 0, "calcul": 0, "stft": 0, "short": 0, "time": 0, "note": 0, "about": 0, "scale": 0, "visual": 0, "constant": 0, "q": 0, "spectral": 0, "cacul": 0, "variat": 0, "window": 0, "length": 0, "cqt": 0, "introduct": 1, "automat": 1, "music": 1, "transcript": 1, "break": 1, "down": 1, "onset": 1, "frame": 1}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 8, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx": 57}, "alltitles": {"Chapter 1": [[0, "chapter-1"]], "Log-Mel Spectrograms": [[0, "log-mel-spectrograms"]], "Fourier Analysis": [[0, "fourier-analysis"]], "The Fourier Transform": [[0, "the-fourier-transform"]], "Fourier Representation": [[0, "fourier-representation"]], "Discrete Fourier Transform": [[0, "discrete-fourier-transform"]], "Calculation of the Discrete Fourier Transform": [[0, "calculation-of-the-discrete-fourier-transform"]], "STFT: Short Time Fourier Transform": [[0, "stft-short-time-fourier-transform"]], "Spectrogram": [[0, "spectrogram"]], "Notes about the STFT": [[0, "notes-about-the-stft"]], "The Mel Scale": [[0, "the-mel-scale"]], "The Mel Spectrogram Visualization": [[0, "the-mel-spectrogram-visualization"]], "Constant Q Spectral Transform": [[0, "constant-q-spectral-transform"], [0, "id1"]], "Caculating the Variation in Window Length": [[0, "caculating-the-variation-in-window-length"]], "Visualizing the CQT Spectrogram": [[0, "visualizing-the-cqt-spectrogram"]], "Introduction to Automatic Music Transcription: Breaking down Onsets and Frames": [[1, "introduction-to-automatic-music-transcription-breaking-down-onsets-and-frames"]]}, "indexentries": {}})