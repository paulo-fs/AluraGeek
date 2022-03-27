import { useDropzone } from 'react-dropzone';
import { Container } from './style';

import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';

import ImageIcon from '../../assets/icons/image.svg';

export default function NewProduct(props) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={(file.path)}>
      {file.path}
      {' '}
      -
      {' '}
      {file.size}
      {' '}
      bytes
    </li>
  ));

  return (
    <Container>
      <h2>Adicionar novo produto</h2>

      <div className="add-file">
        <div className="drop-zone">
          <img src={ImageIcon} alt="icone imagem" />
          <div {...getRootProps({ className: 'dropzone' })}>
            <input {...getInputProps()} />
            <p>
              Arraste ou
              {' '}
              <span>clique aqui</span>
              {' '}
              para adicionar uma imagem para o produto
            </p>
          </div>
          <aside>
            <h4>Files</h4>
            <ul>{files}</ul>
          </aside>
        </div>

      </div>

      <Input placeholder="Nome do produto" />
      <Input placeholder="Preço do produto" />
      <TextArea placeholder="Descrição do produto" rows="2" />
      <button type="submit" className="submit-button">Adicionar Produto</button>
    </Container>
  );
}
