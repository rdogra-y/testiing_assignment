try {
  (() => {
    var me = Object.create;
    var J = Object.defineProperty;
    var he = Object.getOwnPropertyDescriptor;
    var fe = Object.getOwnPropertyNames;
    var ge = Object.getPrototypeOf,
      we = Object.prototype.hasOwnProperty;
    var _ = ((e) =>
      typeof require < "u"
        ? require
        : typeof Proxy < "u"
          ? new Proxy(e, {
              get: (t, a) => (typeof require < "u" ? require : t)[a],
            })
          : e)(function (e) {
      if (typeof require < "u") return require.apply(this, arguments);
      throw Error('Dynamic require of "' + e + '" is not supported');
    });
    var H = (e, t) => () => (e && (t = e((e = 0))), t);
    var be = (e, t) => () => (
      t || e((t = { exports: {} }).exports, t), t.exports
    );
    var ye = (e, t, a, s) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let l of fe(t))
          !we.call(e, l) &&
            l !== a &&
            J(e, l, {
              get: () => t[l],
              enumerable: !(s = he(t, l)) || s.enumerable,
            });
      return e;
    };
    var Se = (e, t, a) => (
      (a = e != null ? me(ge(e)) : {}),
      ye(
        t || !e || !e.__esModule
          ? J(a, "default", { value: e, enumerable: !0 })
          : a,
        e,
      )
    );
    var f = H(() => {});
    var g = H(() => {});
    var w = H(() => {});
    var ce = be((le, Z) => {
      f();
      g();
      w();
      (function (e) {
        if (typeof le == "object" && typeof Z < "u") Z.exports = e();
        else if (typeof define == "function" && define.amd) define([], e);
        else {
          var t;
          typeof window < "u" || typeof window < "u"
            ? (t = window)
            : typeof self < "u"
              ? (t = self)
              : (t = this),
            (t.memoizerific = e());
        }
      })(function () {
        var e, t, a;
        return (function s(l, b, p) {
          function o(n, d) {
            if (!b[n]) {
              if (!l[n]) {
                var r = typeof _ == "function" && _;
                if (!d && r) return r(n, !0);
                if (i) return i(n, !0);
                var u = new Error("Cannot find module '" + n + "'");
                throw ((u.code = "MODULE_NOT_FOUND"), u);
              }
              var I = (b[n] = { exports: {} });
              l[n][0].call(
                I.exports,
                function (h) {
                  var y = l[n][1][h];
                  return o(y || h);
                },
                I,
                I.exports,
                s,
                l,
                b,
                p,
              );
            }
            return b[n].exports;
          }
          for (var i = typeof _ == "function" && _, m = 0; m < p.length; m++)
            o(p[m]);
          return o;
        })(
          {
            1: [
              function (s, l, b) {
                l.exports = function (p) {
                  if (typeof Map != "function" || p) {
                    var o = s("./similar");
                    return new o();
                  } else return new Map();
                };
              },
              { "./similar": 2 },
            ],
            2: [
              function (s, l, b) {
                function p() {
                  return (
                    (this.list = []),
                    (this.lastItem = void 0),
                    (this.size = 0),
                    this
                  );
                }
                (p.prototype.get = function (o) {
                  var i;
                  if (this.lastItem && this.isEqual(this.lastItem.key, o))
                    return this.lastItem.val;
                  if (((i = this.indexOf(o)), i >= 0))
                    return (this.lastItem = this.list[i]), this.list[i].val;
                }),
                  (p.prototype.set = function (o, i) {
                    var m;
                    return this.lastItem && this.isEqual(this.lastItem.key, o)
                      ? ((this.lastItem.val = i), this)
                      : ((m = this.indexOf(o)),
                        m >= 0
                          ? ((this.lastItem = this.list[m]),
                            (this.list[m].val = i),
                            this)
                          : ((this.lastItem = { key: o, val: i }),
                            this.list.push(this.lastItem),
                            this.size++,
                            this));
                  }),
                  (p.prototype.delete = function (o) {
                    var i;
                    if (
                      (this.lastItem &&
                        this.isEqual(this.lastItem.key, o) &&
                        (this.lastItem = void 0),
                      (i = this.indexOf(o)),
                      i >= 0)
                    )
                      return this.size--, this.list.splice(i, 1)[0];
                  }),
                  (p.prototype.has = function (o) {
                    var i;
                    return this.lastItem && this.isEqual(this.lastItem.key, o)
                      ? !0
                      : ((i = this.indexOf(o)),
                        i >= 0 ? ((this.lastItem = this.list[i]), !0) : !1);
                  }),
                  (p.prototype.forEach = function (o, i) {
                    var m;
                    for (m = 0; m < this.size; m++)
                      o.call(
                        i || this,
                        this.list[m].val,
                        this.list[m].key,
                        this,
                      );
                  }),
                  (p.prototype.indexOf = function (o) {
                    var i;
                    for (i = 0; i < this.size; i++)
                      if (this.isEqual(this.list[i].key, o)) return i;
                    return -1;
                  }),
                  (p.prototype.isEqual = function (o, i) {
                    return o === i || (o !== o && i !== i);
                  }),
                  (l.exports = p);
              },
              {},
            ],
            3: [
              function (s, l, b) {
                var p = s("map-or-similar");
                l.exports = function (n) {
                  var d = new p(!1),
                    r = [];
                  return function (u) {
                    var I = function () {
                      var h = d,
                        y,
                        R,
                        S = arguments.length - 1,
                        M = Array(S + 1),
                        x = !0,
                        C;
                      if ((I.numArgs || I.numArgs === 0) && I.numArgs !== S + 1)
                        throw new Error(
                          "Memoizerific functions should always be called with the same number of arguments",
                        );
                      for (C = 0; C < S; C++) {
                        if (
                          ((M[C] = { cacheItem: h, arg: arguments[C] }),
                          h.has(arguments[C]))
                        ) {
                          h = h.get(arguments[C]);
                          continue;
                        }
                        (x = !1),
                          (y = new p(!1)),
                          h.set(arguments[C], y),
                          (h = y);
                      }
                      return (
                        x &&
                          (h.has(arguments[S])
                            ? (R = h.get(arguments[S]))
                            : (x = !1)),
                        x ||
                          ((R = u.apply(null, arguments)),
                          h.set(arguments[S], R)),
                        n > 0 &&
                          ((M[S] = { cacheItem: h, arg: arguments[S] }),
                          x ? o(r, M) : r.push(M),
                          r.length > n && i(r.shift())),
                        (I.wasMemoized = x),
                        (I.numArgs = S + 1),
                        R
                      );
                    };
                    return (
                      (I.limit = n),
                      (I.wasMemoized = !1),
                      (I.cache = d),
                      (I.lru = r),
                      I
                    );
                  };
                };
                function o(n, d) {
                  var r = n.length,
                    u = d.length,
                    I,
                    h,
                    y;
                  for (h = 0; h < r; h++) {
                    for (I = !0, y = 0; y < u; y++)
                      if (!m(n[h][y].arg, d[y].arg)) {
                        I = !1;
                        break;
                      }
                    if (I) break;
                  }
                  n.push(n.splice(h, 1)[0]);
                }
                function i(n) {
                  var d = n.length,
                    r = n[d - 1],
                    u,
                    I;
                  for (
                    r.cacheItem.delete(r.arg), I = d - 2;
                    I >= 0 &&
                    ((r = n[I]), (u = r.cacheItem.get(r.arg)), !u || !u.size);
                    I--
                  )
                    r.cacheItem.delete(r.arg);
                }
                function m(n, d) {
                  return n === d || (n !== n && d !== d);
                }
              },
              { "map-or-similar": 1 },
            ],
          },
          {},
          [3],
        )(3);
      });
    });
    f();
    g();
    w();
    f();
    g();
    w();
    f();
    g();
    w();
    f();
    g();
    w();
    var c = __REACT__,
      {
        Children: $e,
        Component: Je,
        Fragment: V,
        Profiler: Qe,
        PureComponent: Xe,
        StrictMode: et,
        Suspense: tt,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ot,
        cloneElement: nt,
        createContext: rt,
        createElement: N,
        createFactory: it,
        createRef: at,
        forwardRef: lt,
        isValidElement: ct,
        lazy: st,
        memo: Q,
        startTransition: ut,
        unstable_act: It,
        useCallback: X,
        useContext: pt,
        useDebugValue: dt,
        useDeferredValue: mt,
        useEffect: O,
        useId: ht,
        useImperativeHandle: ft,
        useInsertionEffect: gt,
        useLayoutEffect: wt,
        useMemo: bt,
        useReducer: yt,
        useRef: ee,
        useState: z,
        useSyncExternalStore: St,
        useTransition: vt,
        version: Ct,
      } = __REACT__;
    f();
    g();
    w();
    var Rt = __STORYBOOK_API__,
      {
        ActiveTabs: xt,
        Consumer: At,
        ManagerContext: _t,
        Provider: Ot,
        RequestResponseError: Lt,
        addons: U,
        combineParameters: Bt,
        controlOrMetaKey: Pt,
        controlOrMetaSymbol: Mt,
        eventMatchesShortcut: Vt,
        eventToShortcut: Dt,
        experimental_MockUniversalStore: Ht,
        experimental_UniversalStore: Nt,
        experimental_requestResponse: zt,
        experimental_useUniversalStore: Ut,
        isMacLike: Gt,
        isShortcutTaken: Ft,
        keyToSymbol: qt,
        merge: Wt,
        mockChannel: Yt,
        optionOrAltSymbol: jt,
        shortcutMatchesShortcut: Kt,
        shortcutToHumanString: Zt,
        types: te,
        useAddonState: $t,
        useArgTypes: Jt,
        useArgs: Qt,
        useChannel: Xt,
        useGlobalTypes: eo,
        useGlobals: G,
        useParameter: F,
        useSharedState: to,
        useStoryPrepared: oo,
        useStorybookApi: oe,
        useStorybookState: no,
      } = __STORYBOOK_API__;
    f();
    g();
    w();
    var co = __STORYBOOK_COMPONENTS__,
      {
        A: so,
        ActionBar: uo,
        AddonPanel: Io,
        Badge: po,
        Bar: mo,
        Blockquote: ho,
        Button: fo,
        ClipboardCode: go,
        Code: wo,
        DL: bo,
        Div: yo,
        DocumentWrapper: So,
        EmptyTabContent: vo,
        ErrorFormatter: Co,
        FlexBar: Eo,
        Form: To,
        H1: ko,
        H2: Ro,
        H3: xo,
        H4: Ao,
        H5: _o,
        H6: Oo,
        HR: Lo,
        IconButton: L,
        IconButtonSkeleton: Bo,
        Icons: Po,
        Img: Mo,
        LI: Vo,
        Link: Do,
        ListItem: Ho,
        Loader: No,
        Modal: zo,
        OL: Uo,
        P: Go,
        Placeholder: Fo,
        Pre: qo,
        ProgressSpinner: Wo,
        ResetWrapper: Yo,
        ScrollArea: jo,
        Separator: Ko,
        Spaced: Zo,
        Span: $o,
        StorybookIcon: Jo,
        StorybookLogo: Qo,
        Symbols: Xo,
        SyntaxHighlighter: en,
        TT: tn,
        TabBar: on,
        TabButton: nn,
        TabWrapper: rn,
        Table: an,
        Tabs: ln,
        TabsState: cn,
        TooltipLinkList: q,
        TooltipMessage: sn,
        TooltipNote: un,
        UL: In,
        WithTooltip: W,
        WithTooltipPure: pn,
        Zoom: dn,
        codeCommon: mn,
        components: hn,
        createCopyToClipboardFunction: fn,
        getStoryHref: gn,
        icons: wn,
        interleaveSeparators: bn,
        nameSpaceClassNames: yn,
        resetComponents: Sn,
        withReset: vn,
      } = __STORYBOOK_COMPONENTS__;
    f();
    g();
    w();
    var Rn = __STORYBOOK_THEMING__,
      {
        CacheProvider: xn,
        ClassNames: An,
        Global: Y,
        ThemeProvider: _n,
        background: On,
        color: Ln,
        convert: Bn,
        create: Pn,
        createCache: Mn,
        createGlobal: Vn,
        createReset: Dn,
        css: Hn,
        darken: Nn,
        ensure: zn,
        ignoreSsrWarning: Un,
        isPropValid: Gn,
        jsx: Fn,
        keyframes: qn,
        lighten: Wn,
        styled: v,
        themes: Yn,
        typography: jn,
        useTheme: Kn,
        withTheme: Zn,
      } = __STORYBOOK_THEMING__;
    f();
    g();
    w();
    var er = __STORYBOOK_ICONS__,
      {
        AccessibilityAltIcon: tr,
        AccessibilityIcon: or,
        AddIcon: nr,
        AdminIcon: rr,
        AlertAltIcon: ir,
        AlertIcon: ar,
        AlignLeftIcon: lr,
        AlignRightIcon: cr,
        AppleIcon: sr,
        ArrowBottomLeftIcon: ur,
        ArrowBottomRightIcon: Ir,
        ArrowDownIcon: pr,
        ArrowLeftIcon: dr,
        ArrowRightIcon: mr,
        ArrowSolidDownIcon: hr,
        ArrowSolidLeftIcon: fr,
        ArrowSolidRightIcon: gr,
        ArrowSolidUpIcon: wr,
        ArrowTopLeftIcon: br,
        ArrowTopRightIcon: yr,
        ArrowUpIcon: Sr,
        AzureDevOpsIcon: vr,
        BackIcon: Cr,
        BasketIcon: Er,
        BatchAcceptIcon: Tr,
        BatchDenyIcon: kr,
        BeakerIcon: Rr,
        BellIcon: xr,
        BitbucketIcon: Ar,
        BoldIcon: _r,
        BookIcon: Or,
        BookmarkHollowIcon: Lr,
        BookmarkIcon: Br,
        BottomBarIcon: Pr,
        BottomBarToggleIcon: Mr,
        BoxIcon: Vr,
        BranchIcon: Dr,
        BrowserIcon: ne,
        ButtonIcon: Hr,
        CPUIcon: Nr,
        CalendarIcon: zr,
        CameraIcon: Ur,
        CategoryIcon: Gr,
        CertificateIcon: Fr,
        ChangedIcon: qr,
        ChatIcon: Wr,
        CheckIcon: Yr,
        ChevronDownIcon: jr,
        ChevronLeftIcon: Kr,
        ChevronRightIcon: Zr,
        ChevronSmallDownIcon: $r,
        ChevronSmallLeftIcon: Jr,
        ChevronSmallRightIcon: Qr,
        ChevronSmallUpIcon: Xr,
        ChevronUpIcon: ei,
        ChromaticIcon: ti,
        ChromeIcon: oi,
        CircleHollowIcon: ni,
        CircleIcon: ri,
        ClearIcon: ii,
        CloseAltIcon: ai,
        CloseIcon: li,
        CloudHollowIcon: ci,
        CloudIcon: si,
        CogIcon: ui,
        CollapseIcon: Ii,
        CommandIcon: pi,
        CommentAddIcon: di,
        CommentIcon: mi,
        CommentsIcon: hi,
        CommitIcon: fi,
        CompassIcon: gi,
        ComponentDrivenIcon: wi,
        ComponentIcon: bi,
        ContrastIcon: yi,
        ControlsIcon: Si,
        CopyIcon: vi,
        CreditIcon: Ci,
        CrossIcon: Ei,
        DashboardIcon: Ti,
        DatabaseIcon: ki,
        DeleteIcon: Ri,
        DiamondIcon: xi,
        DirectionIcon: Ai,
        DiscordIcon: _i,
        DocChartIcon: Oi,
        DocListIcon: Li,
        DocumentIcon: Bi,
        DownloadIcon: Pi,
        DragIcon: Mi,
        EditIcon: Vi,
        EllipsisIcon: Di,
        EmailIcon: Hi,
        ExpandAltIcon: Ni,
        ExpandIcon: zi,
        EyeCloseIcon: Ui,
        EyeIcon: Gi,
        FaceHappyIcon: Fi,
        FaceNeutralIcon: qi,
        FaceSadIcon: Wi,
        FacebookIcon: Yi,
        FailedIcon: ji,
        FastForwardIcon: Ki,
        FigmaIcon: Zi,
        FilterIcon: $i,
        FlagIcon: Ji,
        FolderIcon: Qi,
        FormIcon: Xi,
        GDriveIcon: ea,
        GithubIcon: ta,
        GitlabIcon: oa,
        GlobeIcon: na,
        GoogleIcon: ra,
        GraphBarIcon: ia,
        GraphLineIcon: aa,
        GraphqlIcon: la,
        GridAltIcon: ca,
        GridIcon: sa,
        GrowIcon: j,
        HeartHollowIcon: ua,
        HeartIcon: Ia,
        HomeIcon: pa,
        HourglassIcon: da,
        InfoIcon: ma,
        ItalicIcon: ha,
        JumpToIcon: fa,
        KeyIcon: ga,
        LightningIcon: wa,
        LightningOffIcon: ba,
        LinkBrokenIcon: ya,
        LinkIcon: Sa,
        LinkedinIcon: va,
        LinuxIcon: Ca,
        ListOrderedIcon: Ea,
        ListUnorderedIcon: Ta,
        LocationIcon: ka,
        LockIcon: Ra,
        MarkdownIcon: xa,
        MarkupIcon: Aa,
        MediumIcon: _a,
        MemoryIcon: Oa,
        MenuIcon: La,
        MergeIcon: Ba,
        MirrorIcon: Pa,
        MobileIcon: re,
        MoonIcon: Ma,
        NutIcon: Va,
        OutboxIcon: Da,
        OutlineIcon: Ha,
        PaintBrushIcon: Na,
        PaperClipIcon: za,
        ParagraphIcon: Ua,
        PassedIcon: Ga,
        PhoneIcon: Fa,
        PhotoDragIcon: qa,
        PhotoIcon: Wa,
        PinAltIcon: Ya,
        PinIcon: ja,
        PlayAllHollowIcon: Ka,
        PlayBackIcon: Za,
        PlayHollowIcon: $a,
        PlayIcon: Ja,
        PlayNextIcon: Qa,
        PlusIcon: Xa,
        PointerDefaultIcon: el,
        PointerHandIcon: tl,
        PowerIcon: ol,
        PrintIcon: nl,
        ProceedIcon: rl,
        ProfileIcon: il,
        PullRequestIcon: al,
        QuestionIcon: ll,
        RSSIcon: cl,
        RedirectIcon: sl,
        ReduxIcon: ul,
        RefreshIcon: ie,
        ReplyIcon: Il,
        RepoIcon: pl,
        RequestChangeIcon: dl,
        RewindIcon: ml,
        RulerIcon: hl,
        SaveIcon: fl,
        SearchIcon: gl,
        ShareAltIcon: wl,
        ShareIcon: bl,
        ShieldIcon: yl,
        SideBySideIcon: Sl,
        SidebarAltIcon: vl,
        SidebarAltToggleIcon: Cl,
        SidebarIcon: El,
        SidebarToggleIcon: Tl,
        SpeakerIcon: kl,
        StackedIcon: Rl,
        StarHollowIcon: xl,
        StarIcon: Al,
        StatusFailIcon: _l,
        StatusPassIcon: Ol,
        StatusWarnIcon: Ll,
        StickerIcon: Bl,
        StopAltHollowIcon: Pl,
        StopAltIcon: Ml,
        StopIcon: Vl,
        StorybookIcon: Dl,
        StructureIcon: Hl,
        SubtractIcon: Nl,
        SunIcon: zl,
        SupportIcon: Ul,
        SwitchAltIcon: Gl,
        SyncIcon: Fl,
        TabletIcon: ae,
        ThumbsUpIcon: ql,
        TimeIcon: Wl,
        TimerIcon: Yl,
        TransferIcon: K,
        TrashIcon: jl,
        TwitterIcon: Kl,
        TypeIcon: Zl,
        UbuntuIcon: $l,
        UndoIcon: Jl,
        UnfoldIcon: Ql,
        UnlockIcon: Xl,
        UnpinIcon: ec,
        UploadIcon: tc,
        UserAddIcon: oc,
        UserAltIcon: nc,
        UserIcon: rc,
        UsersIcon: ic,
        VSCodeIcon: ac,
        VerifiedIcon: lc,
        VideoIcon: cc,
        WandIcon: sc,
        WatchIcon: uc,
        WindowsIcon: Ic,
        WrenchIcon: pc,
        XIcon: dc,
        YoutubeIcon: mc,
        ZoomIcon: hc,
        ZoomOutIcon: fc,
        ZoomResetIcon: gc,
        iconList: wc,
      } = __STORYBOOK_ICONS__;
    var $ = Se(ce()),
      B = "storybook/viewport",
      A = "viewport",
      Ie = {
        mobile1: {
          name: "Small mobile",
          styles: { height: "568px", width: "320px" },
          type: "mobile",
        },
        mobile2: {
          name: "Large mobile",
          styles: { height: "896px", width: "414px" },
          type: "mobile",
        },
        tablet: {
          name: "Tablet",
          styles: { height: "1112px", width: "834px" },
          type: "tablet",
        },
      },
      P = {
        name: "Reset viewport",
        styles: { height: "100%", width: "100%" },
        type: "desktop",
      },
      Ce = { [A]: { value: void 0, isRotated: !1 } },
      Ee = { viewport: "reset", viewportRotated: !1 },
      Te = globalThis.FEATURES?.viewportStoryGlobals ? Ce : Ee,
      pe = (e, t) => e.indexOf(t),
      ke = (e, t) => {
        let a = pe(e, t);
        return a === e.length - 1 ? e[0] : e[a + 1];
      },
      Re = (e, t) => {
        let a = pe(e, t);
        return a < 1 ? e[e.length - 1] : e[a - 1];
      },
      de = async (e, t, a, s) => {
        await e.setAddonShortcut(B, {
          label: "Previous viewport",
          defaultShortcut: ["alt", "shift", "V"],
          actionName: "previous",
          action: () => {
            a({ viewport: Re(s, t) });
          },
        }),
          await e.setAddonShortcut(B, {
            label: "Next viewport",
            defaultShortcut: ["alt", "V"],
            actionName: "next",
            action: () => {
              a({ viewport: ke(s, t) });
            },
          }),
          await e.setAddonShortcut(B, {
            label: "Reset viewport",
            defaultShortcut: ["alt", "control", "V"],
            actionName: "reset",
            action: () => {
              a(Te);
            },
          });
      },
      xe = v.div({ display: "inline-flex", alignItems: "center" }),
      se = v.div(({ theme: e }) => ({
        display: "inline-block",
        textDecoration: "none",
        padding: 10,
        fontWeight: e.typography.weight.bold,
        fontSize: e.typography.size.s2 - 1,
        lineHeight: "1",
        height: 40,
        border: "none",
        borderTop: "3px solid transparent",
        borderBottom: "3px solid transparent",
        background: "transparent",
      })),
      Ae = v(L)(() => ({ display: "inline-flex", alignItems: "center" })),
      _e = v.div(({ theme: e }) => ({
        fontSize: e.typography.size.s2 - 1,
        marginLeft: 10,
      })),
      Oe = {
        desktop: c.createElement(ne, null),
        mobile: c.createElement(re, null),
        tablet: c.createElement(ae, null),
        other: c.createElement(V, null),
      },
      Le = ({ api: e }) => {
        let t = F(A),
          [a, s, l] = G(),
          [b, p] = z(!1),
          { options: o = Ie, disable: i } = t || {},
          m = a?.[A] || {},
          n = m.value,
          d = m.isRotated,
          r = o[n] || P,
          u = b || r !== P,
          I = A in l,
          h = Object.keys(o).length;
        if (
          (O(() => {
            de(e, n, s, Object.keys(o));
          }, [o, n, s, e]),
          r.styles === null || !o || h < 1)
        )
          return null;
        if (typeof r.styles == "function")
          return (
            console.warn(
              "Addon Viewport no longer supports dynamic styles using a function, use css calc() instead",
            ),
            null
          );
        let y = d ? r.styles.height : r.styles.width,
          R = d ? r.styles.width : r.styles.height;
        return i
          ? null
          : c.createElement(Be, {
              item: r,
              updateGlobals: s,
              viewportMap: o,
              viewportName: n,
              isRotated: d,
              setIsTooltipVisible: p,
              isLocked: I,
              isActive: u,
              width: y,
              height: R,
            });
      },
      Be = c.memo(function (e) {
        let {
            item: t,
            viewportMap: a,
            viewportName: s,
            isRotated: l,
            updateGlobals: b,
            setIsTooltipVisible: p,
            isLocked: o,
            isActive: i,
            width: m,
            height: n,
          } = e,
          d = X((r) => b({ [A]: r }), [b]);
        return c.createElement(
          V,
          null,
          c.createElement(
            W,
            {
              placement: "bottom",
              tooltip: ({ onHide: r }) =>
                c.createElement(q, {
                  links: [
                    ...(length > 0 && t !== P
                      ? [
                          {
                            id: "reset",
                            title: "Reset viewport",
                            icon: c.createElement(ie, null),
                            onClick: () => {
                              d({ value: void 0, isRotated: !1 }), r();
                            },
                          },
                        ]
                      : []),
                    ...Object.entries(a).map(([u, I]) => ({
                      id: u,
                      title: I.name,
                      icon: Oe[I.type],
                      active: u === s,
                      onClick: () => {
                        d({ value: u, isRotated: !1 }), r();
                      },
                    })),
                  ].flat(),
                }),
              closeOnOutsideClick: !0,
              onVisibleChange: p,
            },
            c.createElement(
              Ae,
              {
                disabled: o,
                key: "viewport",
                title: "Change the size of the preview",
                active: i,
                onDoubleClick: () => {
                  d({ value: void 0, isRotated: !1 });
                },
              },
              c.createElement(j, null),
              t !== P
                ? c.createElement(_e, null, t.name, " ", l ? "(L)" : "(P)")
                : null,
            ),
          ),
          c.createElement(Y, {
            styles: {
              'iframe[data-is-storybook="true"]': { width: m, height: n },
            },
          }),
          t !== P
            ? c.createElement(
                xe,
                null,
                c.createElement(
                  se,
                  { title: "Viewport width" },
                  m.replace("px", ""),
                ),
                o
                  ? "/"
                  : c.createElement(
                      L,
                      {
                        key: "viewport-rotate",
                        title: "Rotate viewport",
                        onClick: () => {
                          d({ value: s, isRotated: !l });
                        },
                      },
                      c.createElement(K, null),
                    ),
                c.createElement(
                  se,
                  { title: "Viewport height" },
                  n.replace("px", ""),
                ),
              )
            : null,
        );
      }),
      Pe = (0, $.default)(50)((e) => [
        ...Me,
        ...Object.entries(e).map(([t, { name: a, ...s }]) => ({
          ...s,
          id: t,
          title: a,
        })),
      ]),
      D = { id: "reset", title: "Reset viewport", styles: null, type: "other" },
      Me = [D],
      Ve = (0, $.default)(50)((e, t, a, s) =>
        e
          .filter((l) => l.id !== D.id || t.id !== l.id)
          .map((l) => ({
            ...l,
            onClick: () => {
              a({ viewport: l.id }), s();
            },
          })),
      ),
      De = ({ width: e, height: t, ...a }) => ({ ...a, height: e, width: t }),
      He = v.div({ display: "inline-flex", alignItems: "center" }),
      ue = v.div(({ theme: e }) => ({
        display: "inline-block",
        textDecoration: "none",
        padding: 10,
        fontWeight: e.typography.weight.bold,
        fontSize: e.typography.size.s2 - 1,
        lineHeight: "1",
        height: 40,
        border: "none",
        borderTop: "3px solid transparent",
        borderBottom: "3px solid transparent",
        background: "transparent",
      })),
      Ne = v(L)(() => ({ display: "inline-flex", alignItems: "center" })),
      ze = v.div(({ theme: e }) => ({
        fontSize: e.typography.size.s2 - 1,
        marginLeft: 10,
      })),
      Ue = (e, t, a) => {
        if (t === null) return;
        let s = typeof t == "function" ? t(e) : t;
        return a ? De(s) : s;
      },
      Ge = Q(function () {
        let [e, t] = G(),
          {
            viewports: a = Ie,
            defaultOrientation: s,
            defaultViewport: l,
            disable: b,
          } = F(A, {}),
          p = Pe(a),
          o = oe(),
          [i, m] = z(!1);
        l &&
          !p.find((u) => u.id === l) &&
          console.warn(
            `Cannot find "defaultViewport" of "${l}" in addon-viewport configs, please check the "viewports" setting in the configuration.`,
          ),
          O(() => {
            de(o, e, t, Object.keys(a));
          }, [a, e, e.viewport, t, o]),
          O(() => {
            let u = s === "landscape";
            ((l && e.viewport !== l) || (s && e.viewportRotated !== u)) &&
              t({ viewport: l, viewportRotated: u });
          }, [s, l, t]);
        let n =
            p.find((u) => u.id === e.viewport) ||
            p.find((u) => u.id === l) ||
            p.find((u) => u.default) ||
            D,
          d = ee(),
          r = Ue(d.current, n.styles, e.viewportRotated);
        return (
          O(() => {
            d.current = r;
          }, [n]),
          b || Object.entries(a).length === 0
            ? null
            : c.createElement(
                V,
                null,
                c.createElement(
                  W,
                  {
                    placement: "top",
                    tooltip: ({ onHide: u }) =>
                      c.createElement(q, { links: Ve(p, n, t, u) }),
                    closeOnOutsideClick: !0,
                    onVisibleChange: m,
                  },
                  c.createElement(
                    Ne,
                    {
                      key: "viewport",
                      title: "Change the size of the preview",
                      active: i || !!r,
                      onDoubleClick: () => {
                        t({ viewport: D.id });
                      },
                    },
                    c.createElement(j, null),
                    r
                      ? c.createElement(
                          ze,
                          null,
                          e.viewportRotated
                            ? `${n.title} (L)`
                            : `${n.title} (P)`,
                        )
                      : null,
                  ),
                ),
                r
                  ? c.createElement(
                      He,
                      null,
                      c.createElement(Y, {
                        styles: {
                          'iframe[data-is-storybook="true"]': {
                            ...(r || { width: "100%", height: "100%" }),
                          },
                        },
                      }),
                      c.createElement(
                        ue,
                        { title: "Viewport width" },
                        r.width.replace("px", ""),
                      ),
                      c.createElement(
                        L,
                        {
                          key: "viewport-rotate",
                          title: "Rotate viewport",
                          onClick: () => {
                            t({ viewportRotated: !e.viewportRotated });
                          },
                        },
                        c.createElement(K, null),
                      ),
                      c.createElement(
                        ue,
                        { title: "Viewport height" },
                        r.height.replace("px", ""),
                      ),
                    )
                  : null,
              )
        );
      });
    U.register(B, (e) => {
      U.add(B, {
        title: "viewport / media-queries",
        type: te.TOOL,
        match: ({ viewMode: t, tabId: a }) => t === "story" && !a,
        render: () =>
          FEATURES?.viewportStoryGlobals ? N(Le, { api: e }) : N(Ge, null),
      });
    });
  })();
} catch (e) {
  console.error(
    "[Storybook] One of your manager-entries failed: " + import.meta.url,
    e,
  );
}
