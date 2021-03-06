
var LibraryEGL = {
  eglGetDisplay: function(x_display) { return 3 },
  eglInitialize: function(display, majorVersion, minorVersion) { return 1 },
  eglGetConfigs: function(display, hmm1, hmm2, numConfigs) { return 1 },
  eglChooseConfig: function(display, attribList, config, hmm, numConfigs) { return 1 },
  eglCreateWindowSurface: function(display, config, hWnd, hmm) { return 4 },

  eglCreateContext__deps: ['glutCreateWindow', '$GL'],
  eglCreateContext: function(display, config, hmm, contextAttribs) {
    _glutCreateWindow();
    return 1;
  },

  eglMakeCurrent: function(display, surface, surface_, context) { return 1 },
  eglSwapBuffers: function() {},
};

mergeInto(LibraryManager.library, LibraryEGL);

