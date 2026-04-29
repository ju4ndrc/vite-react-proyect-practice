import { useState } from 'react'

import './App.css'

function App() {
  

  return (
    <>
        {/* CHECKBOX — Mobile nav toggle (CSS-only, no JS) */}
  <input type="checkbox" id="nav-toggle" aria-hidden="true">

  {/*} HEADER  */}
  <header className="navbar">
    <nav aria-label="Navegación principal">
      <div className="nav-inner">

        
        {/*Brand */}
        <a className="nav-brand" href="/" aria-label="Mary Tu Tienda Amiga — Inicio">
          <div className="brand-dot" aria-hidden="true">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zm-9 9H7v-2h4v2zm6-4H7v-2h10v2z"/>
            </svg>
          </div>
          Mary Tu Tienda Amiga
        </a>

        {/* Desktop navigation links */}
        <ul className="nav-links" role="list">
          <li><a href="#" aria-current="page">Inicio</a></li>
          <li><a href="#">Categorías</a></li>
          <li><a href="#">Nosotros</a></li>
        </ul>

        {/* Desktop CTA */}
        <a href="#" className="btn-nav">Explorar Tienda</a>

        {/* Mobile hamburger toggle */}
        <label for="nav-toggle" className="nav-hamburger" aria-label="Abrir menú de navegación">
          <span></span>
          <span></span>
          <span></span>
        </label>

      </div>

      {/* Mobile navigation drawer */}
      <ul className="nav-drawer" role="list" aria-label="Menú móvil">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Categorías</a></li>
        <li><a href="#">Nosotros</a></li>
        <li><a href="#" className="btn-nav">Explorar Tienda</a></li>
      </ul>
    </nav>
  </header>
  {/*  END HEADER */}


  {/* MAIN */}
  <main id="main-content">

    {/*  HERO — Welcome banner with headline, CTA and visual card */}
    <section className="hero" aria-labelledby="hero-heading">
      <div className="container">
        <div className="hero-grid">

          {/* Left: copy */}
          <div className="hero-copy">
            <p className="hero-badge">🎉 ¡Gran Lanzamiento!</p>

            <h1 id="hero-heading">
              ¡Bienvenidos a Mary
              <em>Tu Tienda Amiga!</em>
            </h1>

            <p className="hero-sub">
              Descubre una nueva forma de comprar; variedad, calidad y la calidez de siempre, ahora a un clic de distancia.
            </p>

            <div className="hero-actions">
              <a href="#" className="btn-primary">
                Explorar Tienda
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                     stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <a href="#" className="btn-secondary">Ver Ofertas</a>
            </div>
          </div>

          {/* Right: visual */}
          <div className="hero-visual" aria-hidden="true">
            <div className="hero-img-card">
              <span className="hero-emoji">📦</span>
            </div>
            {/* Floating trust badge */}
            <div className="hero-trust">
              <div className="trust-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14l-4-4 1.41-1.41L10 13.17l6.59-6.59L18 8l-8 8z"/>
                </svg>
              </div>
              <div className="trust-text">
                <strong>100%</strong>
                <span>Confiable</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    {/* WHY US — Three feature cards */}
    <section className="section-why" aria-labelledby="why-heading">
      <div className="container">

        <header className="section-head reveal">
          <h2 id="why-heading">¿Por qué elegirnos?</h2>
          <p>Nos esforzamos por brindarte la mejor experiencia de compra con un toque personal.</p>
        </header>

        <div className="features-grid" role="list">

          <article className="feat-card reveal reveal-d1" role="listitem">
            <div className="feat-icon green" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2"
                   stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h3>Calidad Garantizada</h3>
            <p>Productos seleccionados con los más altos estándares para tu hogar.</p>
          </article>

          <article className="feat-card reveal reveal-d2" role="listitem">
            <div className="feat-icon blue" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2"
                   stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="7" height="7"/>
                <rect x="14" y="3" width="7" height="7"/>
                <rect x="14" y="14" width="7" height="7"/>
                <rect x="3" y="14" width="7" height="7"/>
              </svg>
            </div>
            <h3>Variedad Increíble</h3>
            <p>Desde decoración hasta snacks, todo lo que buscas en un solo lugar.</p>
          </article>

          <article className="feat-card reveal reveal-d3" role="listitem">
            <div className="feat-icon yellow" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="#ca8a04" stroke-width="2"
                   stroke-linecap="round" stroke-linejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
              </svg>
            </div>
            <h3>Servicio Amigo</h3>
            <p>Atención cálida y personalizada. Somos tus vecinos, ahora en línea.</p>
          </article>

        </div>
      </div>
    </section>

    {/* PARTNERS — Infinite scrolling marquee */}
    <section className="section-partners" aria-label="Nuestras colaboraciones">
      <div className="container">
        <p className="partners-label">Colaboraciones</p>
      </div>
      <div className="marquee-wrap" aria-hidden="true">
        <div className="marquee-track">
          {/*<!-- Set 1 -->*/}
          <span className="partner"><svg viewBox="0 0 24 24" fill="#9ca3af"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>HogarPro</span>
          <span className="partner"><svg viewBox="0 0 24 24" fill="#9ca3af"><path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 008 20C19 20 22 3 22 3c-1 2-8 2-8 2z"/></svg>NutriMix</span>
          <span className="partner"><svg viewBox="0 0 24 24" fill="#9ca3af"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>ZenVibe</span>
          <span className="partner"><svg viewBox="0 0 24 24" fill="#9ca3af"><circle cx="12" cy="12" r="10"/></svg>FloraShop</span>
          <span className="partner"><svg viewBox="0 0 24 24" fill="#9ca3af"><path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z"/></svg>EcoMart</span>
          <span className="partner"><svg viewBox="0 0 24 24" fill="#9ca3af"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>CasaBella</span>
          {/*<!-- Set 2 — duplicate for seamless loop -->*/}
          <span className="partner"><svg viewBox="0 0 24 24" fill="#9ca3af"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>HogarPro</span>
          <span className="partner"><svg viewBox="0 0 24 24" fill="#9ca3af"><path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 008 20C19 20 22 3 22 3c-1 2-8 2-8 2z"/></svg>NutriMix</span>
          <span className="partner"><svg viewBox="0 0 24 24" fill="#9ca3af"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>ZenVibe</span>
          <span className="partner"><svg viewBox="0 0 24 24" fill="#9ca3af"><circle cx="12" cy="12" r="10"/></svg>FloraShop</span>
          <span className="partner"><svg viewBox="0 0 24 24" fill="#9ca3af"><path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z"/></svg>EcoMart</span>
          <span className="partner"><svg viewBox="0 0 24 24" fill="#9ca3af"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>CasaBella</span>
        </div>
      </div>
    </section>

    {/*<!-- PRODUCTS — Featured product grid -->*/}
    <section className="section-products" aria-labelledby="products-heading">
      <div className="container">

        <div className="products-top reveal">
          <div>
            <h2 id="products-heading">Nuestros Favoritos</h2>
            <p>Los artículos más pedidos por nuestra comunidad.</p>
          </div>
          <a href="#" className="link-all" aria-label="Ver catálogo completo de productos">
            Ver catálogo completo
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                 stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

        <div className="products-grid">

          {/*<!-- Product 1 -->*/}
          <article className="prod-card reveal reveal-d1">
            <div className="prod-img-wrap">
              <div className="prod-thumb t1" aria-hidden="true">
                <span className="prod-emoji">🪴</span>
              </div>
              <button className="prod-add" aria-label="Añadir Decoración Hogar al carrito">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>
              </button>
            </div>
            <div className="prod-info">
              <span className="tag tag-new">Nuevo</span>
              <p className="prod-name">Decoración Hogar</p>
              <p className="prod-price">$25.00</p>
            </div>
          </article>

          {/*<!-- Product 2 -->*/}
          <article className="prod-card reveal reveal-d2">
            <div className="prod-img-wrap">
              <div className="prod-thumb t2" aria-hidden="true">
                <span className="prod-emoji">🌿</span>
              </div>
              <button className="prod-add" aria-label="Añadir Snacks Artesanales al carrito">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>
              </button>
            </div>
            <div className="prod-info">
              <span className="tag tag-popular">Popular</span>
              <p className="prod-name">Snacks Artesanales</p>
              <p className="prod-price">$12.50</p>
            </div>
          </article>

          {/*<!-- Product 3 -->*/}
          <article className="prod-card reveal reveal-d3">
            <div className="prod-img-wrap">
              <div className="prod-thumb t3" aria-hidden="true">
                <span className="prod-emoji">🎁</span>
              </div>
              <button className="prod-add" aria-label="Añadir Sets de Regalo al carrito">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>
              </button>
            </div>
            <div className="prod-info">
              <span className="tag tag-premium">Premium</span>
              <p className="prod-name">Sets de Regalo</p>
              <p className="prod-price">$45.00</p>
            </div>
          </article>

          {/*<!-- Product 4 -->*/}
          <article className="prod-card reveal reveal-d3">
            <div className="prod-img-wrap">
              <div className="prod-thumb t4" aria-hidden="true">
                <span className="prod-emoji">🕯️</span>
              </div>
              <button className="prod-add" aria-label="Añadir Velas Aromáticas al carrito">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>
              </button>
            </div>
            <div className="prod-info">
              <span className="tag tag-new">Nuevo</span>
              <p className="prod-name">Velas Aromáticas</p>
              <p className="prod-price">$18.00</p>
            </div>
          </article>

        </div>
      </div>
    </section>

    {/*<!--  CTA — Newsletter / community signup -->*/}
    <section className="section-cta" aria-labelledby="cta-heading">
      <div className="container">
        <div className="cta-box reveal">
          <h2 id="cta-heading">Únete a nuestra comunidad</h2>
          <p>Suscríbete para recibir ofertas exclusivas del lanzamiento y cupones de descuento mensuales.</p>
          <form className="cta-form" action="#" method="post" novalidate>
            <label for="email-input" className="visually-hidden"></label>
            <input
              id="email-input"
              type="email"
              className="cta-input"
              placeholder="Tu correo electrónico"
              autocomplete="email"
              required
            />
            <button type="submit" className="btn-cta">Suscribirme</button>
          </form>
        </div>
      </div>
    </section>

  </main>
  {/*<!-- END MAIN  -->*/}


  {/*<!-- FOOTER  -->*/}
  <footer className="site-footer" aria-label="Pie de página">
    <div className="container">

      <div className="footer-grid">

        {/*<!-- Col 1: Brand -->*/}
        <div>
          <div className="footer-brand-row">
            <div className="brand-dot" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="white" width="17" height="17">
                <path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zm-9 9H7v-2h4v2zm6-4H7v-2h10v2z"/>
              </svg>
            </div>
            Mary Tu Tienda Amiga
          </div>
          <p className="footer-desc">
            Tu tienda de confianza de siempre, ahora online para estar más cerca de ti en cada momento.
          </p>
        </div>

        {/*<!-- Col 2: Menu -->*/}
        <nav aria-label="Menú del sitio">
          <p className="footer-col-title">Menú</p>
          <ul className="footer-links" role="list">
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Categorías</a></li>
            <li><a href="#">Nosotros</a></li>
          </ul>
        </nav>

        {/*<!-- Col 3: Support -->*/}
        <nav aria-label="Soporte">
          <p className="footer-col-title">Soporte</p>
          <ul className="footer-links" role="list">
            <li><a href="#">Envíos</a></li>
            <li><a href="#">Contacto</a></li>
            <li><a href="#">Términos</a></li>
          </ul>
        </nav>

        {/*<!-- Col 4: Social -->*/}
        <div>
          <p className="footer-col-title">Síguenos</p>
          <div className="social-row" role="list">

            <a href="#" className="soc-icon" aria-label="Síguenos en Instagram" role="listitem">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>

            <a href="#" className="soc-icon" aria-label="Síguenos en Facebook" role="listitem">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            <a href="#" className="soc-icon" aria-label="Contáctanos por WhatsApp" role="listitem">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>

          </div>
        </div>

      </div>
      {/*<!-- /footer-grid -->*/}

      <p className="footer-copy">© 2024 Mary Tu Tienda Amiga. Todos los derechos reservados.</p>

    </div>
  </footer>
  {/*<!-- END FOOTER -->*/}
  </input>
    </>
  )
}

export default App
