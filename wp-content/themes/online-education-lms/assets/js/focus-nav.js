( function( window, document ) {
  function online_education_lms_keepFocusInMenu() {
    document.addEventListener( 'keydown', function( e ) {
      const online_education_lms_nav = document.querySelector( '.sidenav' );
      if ( ! online_education_lms_nav || ! online_education_lms_nav.classList.contains( 'open' ) ) {
        return;
      }
      const elements = [...online_education_lms_nav.querySelectorAll( 'input, a, button' )],
        online_education_lms_lastEl = elements[ elements.length - 1 ],
        online_education_lms_firstEl = elements[0],
        online_education_lms_activeEl = document.activeElement,
        tabKey = e.keyCode === 9,
        shiftKey = e.shiftKey;
      if ( ! shiftKey && tabKey && online_education_lms_lastEl === online_education_lms_activeEl ) {
        e.preventDefault();
        online_education_lms_firstEl.focus();
      }
      if ( shiftKey && tabKey && online_education_lms_firstEl === online_education_lms_activeEl ) {
        e.preventDefault();
        online_education_lms_lastEl.focus();
      }
    } );
  }
  online_education_lms_keepFocusInMenu();
} )( window, document );