const BlogPreview = ({ entry, widgetFor }) => {
  const data = entry.get('data').toJS()
  const date = dayjs(data.date).format('DD-MM-YY')
  return (
    <div className="news-detail">
      <div className="container">
        <div className="row">
          <div className="title">
            <span className="date">{date}</span>
            <h1>{data.title}</h1>
          </div>
        </div>
        <div className="row">
          <div className="image">
            <img src={data.image}/>
          </div>
        </div>
        <div className="row content">{widgetFor('body')}</div>
      </div>
    </div>
  )
}

const ProductPreview = ({ entry, widgetFor }) => {
  const data = entry.get('data').toJS()
  return (
    <div className="product-detail">
      <div className="image" style={{ backgroundImage: `url('${data.image}')` }}></div>
      <div className="content">
        <div className="meta">
          <h1>{data.title}</h1>
            <div className="body">{widgetFor('body')}</div>
      </div>
    </div>
  )
}

const HomePreview = ({ entry, widgetFor }) => {
  const data = entry.get('data').toJS()
  return (
    <div>
      <section className="hero" style={{ backgroundImage: `url('${data.hero.image}')` }}>
        <div className="caption">
          <div className="row">
            <h1>{data.hero.title}</h1>
          </div>
        </div>
      </section>
      <section className="homepage-story">
        <div className="container">
          <div className="row">
            <div className="story-content">{widgetFor('story')}</div>
          </div>
        </div>
      </section>
    </div>
  )
}

const NavigationPreview = ({ entry }) => {
  const data = entry.get('data').toJS()
  return (
    <header className="header-primary">
      <div className="logo">
        <a href="/">
          <img src="https://lh3.googleusercontent.com/pYYQaA0teiO1hCSOR6L2etf_no2b0ehsOVxIsqJ_RbrQPgagSI3IVtUszbl5uVK-Guf_LzeqPDV5_1gUQjCLtMH0fwaN-TraEpwVWBwUGHPy_NqZo4rGfbzMs_7Sx_5Z-PbxSYHC41XSmZCv9hrwl95dF6CSSV8zqoW0wWF4o-wwIYPOSMnYZB9XsW6HOp9VO5JRRYMlX4s62Z2o0rmpHbsPzrRr4b_InI3T3x5MhRl3GfrqZ_LOJdB_4WoiWBjqqcNDl133wDaF--Z5C_pzaD32z3WPs9aZ0PDHLPpptX9qqiqEbREeLQ3WIrCzyNx7hysT5dVQDgRaVFSAa_6uXOiOOEnaGcYDbMSPIW-6wDLNp3X8ht2ZL9yuqWlc5vMfMNkmYpckCubKxOD2WhsmZ-2weKvmOOo949DBHSbqPvab1QGTy6Ny2KiZs3kmO38q-qeg_FriJ5CgK8YdvLe-IQfmBxzgOT_kVQdWvoIrPG7-LPtHydNIbjcEGyc1zt44GadbFMo4Syxk9Mb9HwxO3uMDe1EFphSNyBTLumcjTdBA-TKtmu1egVeK7LoMSuhigcGgVpn0oacHgsaQ61o3eCTFBGDYBsWvnWapyxHbc6qkVM37PbNpEaVb1k5Smnn7yuoG41Y8fIEx-4qmDQNphMJ8-WJArSyFRNm66U8ShIrL84rXIYij59FatT4o3PNxlLVkLufj5uH7JPsW9Gw0086eOMq2f_QxpGrnp0EW85Ybp5LblPtqWDR8R6BshZdheLD4vgt5SFftGKwD_RRfFTGOFFzNNnCQeA=w371-h158-no?authuser=1" alt="ТУГТАН ГРАНД"/>
        </a>
      </div>
      <a className="nav-button">
        <img src="https://lh3.googleusercontent.com/pYYQaA0teiO1hCSOR6L2etf_no2b0ehsOVxIsqJ_RbrQPgagSI3IVtUszbl5uVK-Guf_LzeqPDV5_1gUQjCLtMH0fwaN-TraEpwVWBwUGHPy_NqZo4rGfbzMs_7Sx_5Z-PbxSYHC41XSmZCv9hrwl95dF6CSSV8zqoW0wWF4o-wwIYPOSMnYZB9XsW6HOp9VO5JRRYMlX4s62Z2o0rmpHbsPzrRr4b_InI3T3x5MhRl3GfrqZ_LOJdB_4WoiWBjqqcNDl133wDaF--Z5C_pzaD32z3WPs9aZ0PDHLPpptX9qqiqEbREeLQ3WIrCzyNx7hysT5dVQDgRaVFSAa_6uXOiOOEnaGcYDbMSPIW-6wDLNp3X8ht2ZL9yuqWlc5vMfMNkmYpckCubKxOD2WhsmZ-2weKvmOOo949DBHSbqPvab1QGTy6Ny2KiZs3kmO38q-qeg_FriJ5CgK8YdvLe-IQfmBxzgOT_kVQdWvoIrPG7-LPtHydNIbjcEGyc1zt44GadbFMo4Syxk9Mb9HwxO3uMDe1EFphSNyBTLumcjTdBA-TKtmu1egVeK7LoMSuhigcGgVpn0oacHgsaQ61o3eCTFBGDYBsWvnWapyxHbc6qkVM37PbNpEaVb1k5Smnn7yuoG41Y8fIEx-4qmDQNphMJ8-WJArSyFRNm66U8ShIrL84rXIYij59FatT4o3PNxlLVkLufj5uH7JPsW9Gw0086eOMq2f_QxpGrnp0EW85Ybp5LblPtqWDR8R6BshZdheLD4vgt5SFftGKwD_RRfFTGOFFzNNnCQeA=w371-h158-no?authuser=1" className="open"/>
      </a>
      <nav className="navigation" style={{ paddingRight: '40px' }}>
        <ul>
          {!data.nav_items ? null : data.nav_items.map((item, idx) => (
            <li key={idx}>
              <a href={item.path}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

CMS.registerPreviewTemplate('blog', BlogPreview)
CMS.registerPreviewTemplate('product', ProductPreview)
CMS.registerPreviewTemplate('home', HomePreview)
CMS.registerPreviewTemplate('navigation', NavigationPreview)
