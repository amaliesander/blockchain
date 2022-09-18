package merkletree;

import java.security.MessageDigest;
import java.util.List;

public class MerkleTree{
     //specify used bigest
    
    private MerkleTree leftTree = null;
    private MerkleTree RightTree = null;

    private MerkleTree leftLeaf = null;
    private MerkleTree rightLeaf = null;

    private byte[] digest;

    private final MessageDigest md;

    private byte[] digest(Leaf leaf){
        final List<byte[]> dataBlock = leaf.getDataBlock();

        final int numBlocks = dataBlock.size();
        for (int index=0; index<numBlocks-1;index++){
            md.update(dataBlock.get(index));
        }
        digest = md.digest(dataBlock.get(numBlocks-1));

        return (digest);
        
    }

    public MerkleTree(MessageDigest md){
        this.md = md;
    }

    

}
