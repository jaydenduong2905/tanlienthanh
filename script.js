/* Tân Liên Thành — language toggle (EN/VI) and Documentation screen routing.
   Load at the end of <body>. */
   const b = {
    nav_products: "Sản phẩm",
    nav_story: "Khu rừng",
    nav_process: "Quy trình",
    nav_contact: "Liên hệ",
    qn_docs: "Quản lý rừng bền vững",
    docs_back: "Quay lại trang chủ",
    docs_h: "Quản lý rừng bền vững",
    qn_story: "Khu rừng", qn_products: "Sản phẩm", qn_process: "Quy trình", qn_gallery: "Thư viện ảnh", qn_contact: "Liên hệ",
    hero_eyebrow: "Tân Liên Thành — Gỗ bền vững, thành lập năm 2004",
    hero_sub: "Tân Liên Thành đã trồng keo, loại gỗ chủ lực của chúng tôi, trong hơn 20 năm, và gần đây bắt đầu trồng thêm cây thông.",
    story_h: "Hai thập kỷ với cây keo, và một chương mới cùng cây thông",
    story_lede: "Cây keo là trọng tâm của khu rừng chúng tôi trong hơn hai mươi năm qua; cây thông là loài mới nhất chúng tôi trồng thêm.",
    story_p1: "Tân Liên Thành bắt đầu trồng cây keo hơn 20 năm trước, và đây vẫn luôn là loại gỗ chủ lực của chúng tôi kể từ đó — nền tảng cho mọi sản phẩm chúng tôi cung ứng. Gần đây, chúng tôi bắt đầu trồng thêm cây thông, bổ sung loài thứ hai cho khu rừng của mình.",
    story_p2: "Cây keo vẫn là trụ cột của xưởng chúng tôi, được canh tác theo chu kỳ trưởng thành và ổn định qua hai thập kỷ. Trong khi đó, cây thông vẫn còn non trong khu rừng của chúng tôi — mới được trồng cách đây vài năm — và đang bắt đầu phát triển bên cạnh những khoảnh keo đã trưởng thành.",
    stat1_unit: "năm",
    stat1_label: "trồng keo, loại gỗ chủ lực của chúng tôi",
    stat3_unit: "loài",
    stat3_label: "loài gỗ trên đất của chúng tôi: keo đã trưởng thành và thông mới trồng",
    prod_h: "Keo và Thông, một khu rừng đang phát triển",
    prod_lede: "Keo, loại gỗ chủ lực lâu năm của chúng tôi, nay có thêm thông — loài mới được bổ sung vào khu rừng.",
    w1_name: "Gỗ Thông", w1_desc: "Loài mới nhất chúng tôi trồng, mới được đưa vào canh tác cách đây vài năm. Sinh trưởng nhanh và đã bắt đầu phát triển tốt — nhẹ, chi phí hợp lý và dễ hoàn thiện bề mặt.", w1_use: "Phù hợp: cốp pha, khung nhà, pallet",
    w2_name: "Gỗ Keo", w2_desc: "Gỗ chủ lực của chúng tôi, được canh tác hơn 20 năm. Vân gỗ thẳng, độ bền cao, chu kỳ sinh trưởng phù hợp cho nguồn cung ổn định và lâu dài.", w2_use: "Phù hợp: khung nhà, ván ép, cốt nội thất",
    proc_h: "Quy trình từ rừng đến nơi giao hàng",
    proc_lede: "Quy trình ba giai đoạn, được hoàn thiện qua hai thập kỷ.",
    step1_h: "Trồng & Canh tác", step1_p: "Chúng tôi đã trồng keo, loại gỗ chủ lực, trong hơn 20 năm, và gần đây bắt đầu trồng thêm thông để mở rộng khu rừng.",
    step2_h: "Khai thác", step2_p: "Cây được khai thác chọn lọc khi đã trưởng thành, nhằm duy trì sự phát triển khỏe mạnh và năng suất của khu rừng cho thế hệ tiếp theo.",
    step3_h: "Sấy khô", step3_p: "Gỗ được sấy trong lò đến độ ẩm chuẩn 10–12%, sẵn sàng sử dụng trong mọi điều kiện khí hậu.",
    contact_h: "Liên hệ với chúng tôi",
    contact_lede: "Liên hệ trực tiếp với chúng tôi qua thông tin bên dưới.",
    k_address: "Địa chỉ", v_address: "Khu Đồi Cao, xã Lộc Tân,<br>xã Bảo Lâm 2, tỉnh Lâm Đồng,<br>Việt Nam",
    k_phone: "Điện thoại", k_email: "Email",
    foot_rights: "© 2026 Tân Liên Thành. Bảo lưu mọi quyền.",
    gallery_h: "Bên trong khu rừng của chúng tôi",
    gallery_lede: "Một góc nhìn về cách Tân Liên Thành canh tác và chuẩn bị nguồn gỗ.",
    gallery1_h: "Khu rừng bền vững của chúng tôi",
    gallery1_p: "Hơn 20 năm canh tác cây keo tạo nên nền tảng của khu rừng chúng tôi, với cây thông mới được trồng thêm gần đây.",
    gallery2_h: "Chứng nhận FSC sẽ đạt được trong năm nay",
    gallery2_p: "Chúng tôi đang trong lộ trình nhận chứng nhận FSC trong năm nay, thể hiện cam kết lâu dài về quản lý rừng có trách nhiệm và bền vững.",
    gallery3_h: "Thành phẩm sẵn sàng",
    gallery3_p: "Từ gỗ khung kết cấu đến nguyên liệu nội thất cao cấp, sản phẩm của chúng tôi được phân loại và chuẩn bị theo đúng yêu cầu của từng khách hàng."
  };
  const a = {};
  document.querySelectorAll('[data-i18n]').forEach(el => { a[el.getAttribute('data-i18n')] = el.innerHTML; });
  const aPh = {};
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => { aPh[el.getAttribute('data-i18n-placeholder')] = el.getAttribute('placeholder'); });
  
  let variant = 'a';
  const btn = document.getElementById('lang-toggle');
  function applyVariant(){
    const dict = variant === 'b' ? b : a;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) el.innerHTML = dict[key];
    });
    const phDict = variant === 'b' ? b : aPh;
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (phDict[key]) el.setAttribute('placeholder', phDict[key]);
    });
    btn.textContent = variant === 'b' ? 'EN' : 'VI';
  }
  btn.addEventListener('click', () => {
    variant = variant === 'a' ? 'b' : 'a';
    applyVariant();
  });
  
  const viewHome = document.getElementById('view-home');
  const viewDocs = document.getElementById('view-docs');
  function route(){
    const hash = location.hash;
    if (hash === '#documentation'){
      viewHome.hidden = true; viewDocs.hidden = false;
      window.scrollTo(0, 0);
    } else {
      const wasDocs = !viewDocs.hidden;
      viewDocs.hidden = true; viewHome.hidden = false;
      const target = hash.length > 1 ? document.querySelector(hash) : null;
      if (target && wasDocs) target.scrollIntoView();
      else if (!target && wasDocs) window.scrollTo(0, 0);
    }
  }
  window.addEventListener('hashchange', route);
  route();