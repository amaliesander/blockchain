package merkletree;

import java.util.List;

public class Leaf {

    private final List<byte[]> dataBlock;

    public Leaf(final List<byte[]> dataBlock){
        this.dataBlock = dataBlock;
    }

    public List<byte[]> getDataBlock(){
        return (dataBlock);
    }
    
}
