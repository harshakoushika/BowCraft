import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© 2024 BOW CRAFT. All rights reserved.</p>
      <div className="footer-icons">
                                <i id='icon' class="fa-brands fa-facebook"></i>
                                <i  id='icon' class="fa-brands fa-twitter"></i>
                                <i  id='icon' class="fa-brands fa-instagram"></i>
                                <i   id='icon' class="fa-brands fa-linkedin-in"></i>
                            </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#654321',
    color: '#fff',
    padding: '50px',
    textAlign: 'center',
    position: 'fixed',
    bottom: '0',
    width: '100%',
  },
};

export default Footer;
