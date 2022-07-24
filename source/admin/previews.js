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
          <div className="weight">
            <span>{`${data.weight}kg`}</span>
          </div>
          <div className="price">
            <span>{`€${data.price}`}</span>
          </div>
        </div>
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
          <img src="https://lh3.googleusercontent.com/SjpxObzuEZ8grbvx4cMVfxJ37Gm7TMafFQHl_8DaPFkwVjYFgKFT4_R663rJRu6bzmP1kGOZHqOg050AIOPMeVYHj99r69cQcnnlA2Eusj_cbB3ck_Ufb-zt0N4a83a34R3Xkb6m1PxSGlaw807aDCBVdxePNdvQYbtMRqLOsZrMF8D75rBDzsHUf9_dN1uRoJEJbKGYIZ-CKt-4fERltB3F_OVL9Ffa8pIQ88K8txNLD1VlmgmQHhsd9v4skKdvHZPb_tk9_xpp-D5J5W04wmncPx8lS5Yy5u79bMb1jbBBOSEeXa8aHrTAPpGFBGQ85gbqcakNndagUvy-k9zi4efxEM8N3-p-H8pZvvoaNIChg824_CNn2swuC5uyDJwTklO--wcuqwPEARVy4epKtAxbdEMFWL96VAKD-8_urziouT2P4PgEJPmcchRyzgLi6K-s_OCxR3I7TSMyiQsr5cJTbRgore2Q8EHrYpDkT2Pz-0m9XtwgLb1ISSBod1yA4BRV2CbCCNtqld9N0uKByNvp0F94ojs0EcXF7NDpZ3Iy3iBq3LGqzIMIT3tLk-IS4J3nu-frLsIwYy-JT0JnBBCmnSSEP8gZRzF3Wd8y1P2m3mdLTfFbyFLcpg7I3tgOTxXVLX0wNgUUmEvjEXsCF1V2kcvoUj7z_l1Auy7aMxEBKgTDISRMyfj8917_NxUaENp0zSrwdiwl4GkvFyLQB6ZdefWajRSgpGEHQXfzNg30GGAcFiszXMi4jxKcL6MTVbcO8JU8FxjdKHhHXkBzrav1JX81gAAkKg=w100-h55-no?authuser=1" alt="ТУГТАН ГРАНД ХХК"/>
        </a>
      </div>
      <a className="nav-button">
        <img src="https://lh3.googleusercontent.com/SjpxObzuEZ8grbvx4cMVfxJ37Gm7TMafFQHl_8DaPFkwVjYFgKFT4_R663rJRu6bzmP1kGOZHqOg050AIOPMeVYHj99r69cQcnnlA2Eusj_cbB3ck_Ufb-zt0N4a83a34R3Xkb6m1PxSGlaw807aDCBVdxePNdvQYbtMRqLOsZrMF8D75rBDzsHUf9_dN1uRoJEJbKGYIZ-CKt-4fERltB3F_OVL9Ffa8pIQ88K8txNLD1VlmgmQHhsd9v4skKdvHZPb_tk9_xpp-D5J5W04wmncPx8lS5Yy5u79bMb1jbBBOSEeXa8aHrTAPpGFBGQ85gbqcakNndagUvy-k9zi4efxEM8N3-p-H8pZvvoaNIChg824_CNn2swuC5uyDJwTklO--wcuqwPEARVy4epKtAxbdEMFWL96VAKD-8_urziouT2P4PgEJPmcchRyzgLi6K-s_OCxR3I7TSMyiQsr5cJTbRgore2Q8EHrYpDkT2Pz-0m9XtwgLb1ISSBod1yA4BRV2CbCCNtqld9N0uKByNvp0F94ojs0EcXF7NDpZ3Iy3iBq3LGqzIMIT3tLk-IS4J3nu-frLsIwYy-JT0JnBBCmnSSEP8gZRzF3Wd8y1P2m3mdLTfFbyFLcpg7I3tgOTxXVLX0wNgUUmEvjEXsCF1V2kcvoUj7z_l1Auy7aMxEBKgTDISRMyfj8917_NxUaENp0zSrwdiwl4GkvFyLQB6ZdefWajRSgpGEHQXfzNg30GGAcFiszXMi4jxKcL6MTVbcO8JU8FxjdKHhHXkBzrav1JX81gAAkKg=w100-h55-no?authuser=1" className="open"/>
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
