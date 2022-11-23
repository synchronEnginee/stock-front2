import { useRef } from 'react'
import { Link, Outlet } from 'react-router-dom'
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  List,
  ListItem,
} from '@chakra-ui/react'
import { css } from '@emotion/react'

import { FALLSTOCK_URL, COMPARE_URL, DIVIDENDLIST_URL } from '../url'

/**
 * SPAのレイアウト.
 * ヘッダーとサイドDrawer
 */
const Layout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef<any>()

  return (
    <>
      <Button
        css={styles.drawerButton}
        ref={btnRef}
        colorScheme="teal"
        onClick={onOpen}
      >
        Open
      </Button>
      <Drawer
        colorScheme="blue"
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>ページリンク</DrawerHeader>

          <DrawerBody>
            <List spacing={3}>
              <ListItem>
                <Link to={FALLSTOCK_URL}>
                  <Button colorScheme="blue">下落率順</Button>
                </Link>
              </ListItem>
              <ListItem>
                <Link to={COMPARE_URL}>
                  <Button colorScheme="blue">銘柄比較</Button>
                </Link>
              </ListItem>
              <ListItem>
                <Link to={DIVIDENDLIST_URL}>
                  <Button colorScheme="blue">配当リスト</Button>
                </Link>
              </ListItem>
            </List>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      {/* メインコンテンツ */}
      <Outlet />
    </>
  )
}

const styles = {
  drawerButton: css`
  zIndex: '1',
  display: 'fixed',
  top: 0,
  left: 0,
  `,
  drawer: css`
    background: 'gray';
  `,
}

export default Layout
